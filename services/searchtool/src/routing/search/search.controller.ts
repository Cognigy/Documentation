import natural, {Stemmer, WordTokenizer} from "natural";
import {eng, removeStopwords} from "stopword";
import {Logger} from "winston";
import {IIndex, ISearchDocument, ISearchResult, ISubtitleScore, ITitleScore} from "../../db/models/models.interfaces";
import {findDocument} from "../../db/service/document.service";
import {findIgnoredDocument} from "../../db/service/ignored.service";
import {findIndex} from "../../db/service/index.service";
import {findSearchResult, saveSearchResult} from "../../db/service/searchResult.service";
import {serverLogs} from "../../utils/logger";


export class Search {
    searchResult: ISearchResult;
    loadedResults: boolean = false;
    tokenizer: WordTokenizer;
    stemmer: Stemmer;
    searchTerm: string[] = [];
    logEntry: Logger = serverLogs

    constructor() {
        this.searchResult = {
            query: [],
            documents: [],
            documentCount: 0,
            created_at: new Date(Date.now()).toISOString().split('T')[0],
        }

        this.tokenizer = new WordTokenizer();
        this.stemmer = natural.PorterStemmer;
    }

    tokenize(query: string, stopwordFilter: boolean = true): Array<string> {
        if (!stopwordFilter) {
            return this.tokenizer.tokenize(query);
        }

        let words = removeStopwords(this.tokenizer.tokenize(query), [...eng]);
        this.searchTerm = words;
        return words
    }

    async generateIndex(words: string[]): Promise<IIndex[]> {
        let curIndex = [];

        for (let word of words) {
            // query the database:
            const result = await findIndex(word.toLowerCase());
    
            // filter results:
            if (result !== null) {
                curIndex.push(result);
            }
        }

        return curIndex;
    }

    addScoring(index: IIndex[]): Array<IIndex> {
        return index.map(word => {
            // weighting the result: title counts as 3, subtitle as 2 and text as 1
            let score: number = 0
            for (let metaData of word.meta_data) {
                // set initial score based on raw occurance of the term:
                score += metaData.line.length

                // manipulate score by multiplying the score based on occurance of title, subtitle and text
                for (let occurance of metaData.occurrence) {
                    if (occurance === "title") {
                        score = score * 3
                    } else if (occurance === "subtitle") {
                        score = score * 2
                    }
                }


                metaData.score = score
                score = 0
            }

            // sort the meta_data array based on score:
            word.meta_data.sort((a: any, b: any) => {
                if (a.score > b.score) {
                    return -1
                }

                if (a.score < b.score) {
                    return 1
                }

                return 0
            })

            // filter out scored results with a score lower than 10:
            // 10 is currently an arbitrary number and can be changed.
            //meta = meta.filter((element: any) => {
            //    return element.score > 10
            //});
            return word
        });
    }

    /**
     * Asynchronous method to generate the search results.
     * 
     * @param scoredIndex 
     */
    async generateSearchResult(scoredIndex: IIndex[]) {
        // combine the results:
        for (let scored of scoredIndex) {
            this.searchResult.query.push(scored.word);
            let meta = scored.meta_data;
    
            for (let scoredDoc of meta) {
                let relatedDocument = await findDocument(scoredDoc.document_id);

                if (relatedDocument === null) {
                    this.logEntry.error('document missing in database: ' + scoredDoc.document_id)
                    throw new Error(`Document missing in database: ${scoredDoc.document_id}`)
                }

                let doc: ISearchDocument = {
                    documentId: scoredDoc.document_id,
                    documentTitle: relatedDocument.title,
                    documentSubtitles: relatedDocument.subtitle,
                    url: "",
                    subUrl: [],
                    scoring: {
                        occurrenceScore: {
                            title: 0,
                            subtitle: 0,
                            text: 0,
                        },
                        baseScore: scoredDoc.score,
                        titleScore: {
                            title: "",
                            matches: [],
                            score: 0
                        },
                        subtitleScores: [],
                        matches: 1,
                        matchedWords: [scored.word]
                    }
                }
    
                for (let occurance of scoredDoc.occurrence) {
                    if (occurance === 'title') {
                        doc.scoring.occurrenceScore.title += 1;
                    }
    
                    if (occurance === 'subtitle') {
                        doc.scoring.occurrenceScore.subtitle +=1;
                    }
    
                    if (occurance === 'text') {
                        doc.scoring.occurrenceScore.text += 1;
                    }
                }


                // add scoring for title and subtitles:
                let titlePreparation: ITitleScore | null = this.scoreTitle(doc.documentTitle);

                if (titlePreparation !== null) {
                    doc.scoring.titleScore = titlePreparation;
                }

                for (let subtitle of relatedDocument.subtitle) {
                    let curSubScore = this.scoreSubtitle(subtitle);
                    if (curSubScore !== null) {
                        doc.scoring.subtitleScores.push(curSubScore);
                    }
                }

                // generate url based on title/subtitle scores: subtitle > title => subtitle, otherwise title.
                let addSubUrl: boolean = false
                let subtitle: string = ""

                for (let subScore of doc.scoring.subtitleScores) {
                    if (subScore.score > doc.scoring.titleScore.score) {
                        addSubUrl = true
                        subtitle = subScore.subtitle
                    }
                }

                if (addSubUrl) {
                    doc.url = relatedDocument.url + "#" + subtitle
                }
                else {
                    doc.url = relatedDocument.url
                }
    
                // merge values from other words related to the current document:
                let added = false;
                for (let resultDoc of this.searchResult.documents) {
                    if (resultDoc.documentId === doc.documentId) {
                        resultDoc.scoring.baseScore += doc.scoring.baseScore;
                        resultDoc.scoring.occurrenceScore.title += doc.scoring.occurrenceScore.title;
                        resultDoc.scoring.occurrenceScore.subtitle += doc.scoring.occurrenceScore.subtitle;
                        resultDoc.scoring.occurrenceScore.text += doc.scoring.occurrenceScore.text;
                        resultDoc.scoring.matches += 1;
                        resultDoc.scoring.matchedWords.push(scored.word)
                        added = true;
                    }
                }
    
                if (!added) {
                    this.searchResult.documents.push(doc);
                }
            }
        }

        // sort the result set:
        this.sortResults();

        // add the document infos:
        for (let i = 0; i < this.searchResult.documents.length; i++) {
            let doc = await findDocument(this.searchResult.documents[i].documentId);
            let ignoredDoc = await findIgnoredDocument(this.searchResult.documents[i].documentTitle);

            if (ignoredDoc !== null) continue;

            this.searchResult.documents[i].documentTitle = doc?.title || "";

        }

        this.searchResult.documentCount = this.searchResult.documents.length;
    }

    /**
     * Refine the search results based on the given threshold.
     * 
     * @param threshold 
     */
    refineResults(threshold: number) {
        // apply refinement:
        this.searchResult.documents = this.searchResult.documents.filter(doc => doc.scoring.baseScore > threshold);
        // update count:
        this.searchResult.documentCount = this.searchResult.documents.length;
    }


    sortResults(): void {
        this.searchResult.documents.sort((a: ISearchDocument, b: ISearchDocument) => {
            // sort by the occurance of any part of the search query in the document title:
            const dtA = this.applyStemming(this.tokenize(a.documentTitle));
            const dtB = this.applyStemming(this.tokenize(b.documentTitle));
            let dtAMatch = false;
            let dtBMatch = false;
            const query = this.searchResult.query;
            
            for (let i = 0; i < dtA.length; i++) {
                for (let j = 0; j < query.length; j++) {
                    if (query[j] === dtA[i]) {
                        dtAMatch = true;
                    }
                }
            }

            for (let i = 0; i < dtB.length; i++) {
                for (let j = 0; j < query.length; j++) {
                    if (query[j] === dtB[i]) {
                        dtBMatch = true;
                    }
                }
            }

            if (dtAMatch && !dtBMatch) return -1;
            if (!dtAMatch && dtBMatch) return 1;

            // sort by how many matches are found:
            if (query.length > 1) {
                const mA = a.scoring.matches;
                const mB = b.scoring.matches;
                if (mA > mB) return -1;
                if (mA < mB) return 1;
            }

            // sort results by occurance of title:
            const tA = a.scoring.occurrenceScore.title
            const tb = b.scoring.occurrenceScore.title
            if (tA > tb) return -1
            if (tA < tb) return 1
            
            // sort results by occurance of subtitle
            const stA = a.scoring.occurrenceScore.subtitle
            const stB = b.scoring.occurrenceScore.subtitle
            if (stA > stB) return -1
            if (stA < stB) return 1

            /*
            // third sort: sort results by the combined occuranceScores:
            const ocA = a.scoring.occuranceScore.title+a.scoring.occuranceScore.subtitle+a.scoring.occuranceScore.text
            const ocB = b.scoring.occuranceScore.title+b.scoring.occuranceScore.subtitle+b.scoring.occuranceScore.text
            if (ocA > ocB) return -1
            if (ocA < ocB) return 1

            // fourth sort: sort results by the base score:
            const bcA = a.scoring.baseScore
            const bcB = b.scoring.baseScore
            if (bcA > bcB) return -1
            if (bcA < bcB) return 1
            */
            // if nothing applys:
            return 0;
            
        })
    }

    async saveResults(): Promise<void> {
        await saveSearchResult(this.searchResult);
    }

    async loadSearchResults(query: string[]): Promise<void> {
        const result = await findSearchResult(query);
        if (result !== null) {
            this.searchResult = result;
            this.loadedResults = true;
        }
    }

    applyStemming(words: string[]) {
        let stemmedWords = [];

        for (let i = 0; i < words.length; i++) {
            stemmedWords.push(this.stemmer.stem(words[i]));
        }

        return stemmedWords;
    }

    scoreTitle(title: string) {
        let curTitle: ITitleScore = {
            title: title,
            matches: [],
            score: 0
        }

        let titleWords = this.tokenize(title.toLowerCase(), false);

        for (let word of titleWords) {
            for (let queryWord of this.searchTerm) {
                if (queryWord === word) {
                    curTitle.score += 1;
                    curTitle.matches.push(queryWord);
                }
            }
        }

        if ( curTitle.score > 0 ) {
            return curTitle;
        }
        else {
            return null;
        }
    }

    scoreSubtitle(subtitle: string) {
        let curSub: ISubtitleScore = {
            subtitle: subtitle.split(" ").join('-').toLowerCase(),
            matches: [],
            score: 0
        }
        
        let subtitleWords = this.tokenize(subtitle.toLowerCase(), false);

        for (let word of subtitleWords) {
            for (let queryWord of this.searchTerm) {
                if (queryWord === word) {
                    curSub.score += 1;
                    curSub.matches.push(queryWord);
                }
            }
        }

        if (curSub.score > 0 ) {
            return curSub;
        }
        else {
            return null;
        }
    }
}
