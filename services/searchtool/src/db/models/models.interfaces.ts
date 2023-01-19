// index
export interface IIndexMetaData {
    document_id: string,
    occurrence: string[],
    line: Array<number>,
    score: number
}

export interface IIndex {
    word: string,
    meta_data: IIndexMetaData[],
    created_at: string,
    updated_at: string
}

// search result:
// sub model (scoring) for occurrence counts.
export interface IOOccurrence {
    title: number;
    subtitle: number;
    text: number;
}

// sub model (search document) for scoring
export interface IScoring {
    occurrenceScore: IOOccurrence;
    baseScore: number;
    titleScore: ITitleScore;
    subtitleScores: ISubtitleScore[]
    matches: number;
    matchedWords: string[];
}

// sub model (search result) for a document that contains at least parts of the search term
export interface ISearchDocument {
    documentId: string;
    documentTitle: string;
    documentSubtitles: string[];
    url: string;
    subUrl: string[];
    scoring: IScoring;
}

// main model for the search result.
export interface ISearchResult {
    query: string[];
    documents: Array<ISearchDocument>;
    documentCount: number;
    created_at: string;
}

// sub model (scoring) for the subtitle score
export interface ISubtitleScore {
    subtitle: string;
    matches: Array<string>;
    score: number;
}

// sub model (scoring) for the title score
export interface ITitleScore {
    title: string;
    matches: Array<string>;
    score: number;
}

// document:
export interface IDocument {
    title: string,
    subtitle: Array<string>,
    url: string,
    indexed_at: string
}

// ignored document:
export interface IIgnoredDocument {
    title: string,
}