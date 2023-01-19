import { Request, Response } from "express";
import { serverLogs } from "../../utils/logger";
import { Search } from "./search.controller";
import { letterFilter, onBadRequest, onError, onNotFound } from "../route.handlers";
import { translate } from "../../utils/translator";
import { IDocResultSet } from "./search.interfaces";


const logEntry = serverLogs

/**
 * Asynchronous function to execute the search query against the
 * index database.
 * 
 * @param req 
 * @param res 
 * @returns Promise of a response object.
 */
export async function search(req: Request, res: Response): Promise<Response> {
    try {
        const indexQuery: string = req.query.term as string;
        const offset: number = parseInt(req.query.offset as string, 10) || 0;
        const limit: number = parseInt(req.query.limit as string, 10) || 10;
        const addScoringToResponse: boolean = (req.query.addScoring as string === 'true');
        const scoringFilter: boolean = (req.query.scoringFilter as string === 'true');
        const scoreLimit: number = parseInt(req.query.scoreLimit as string, 10) || 50;
        const startIndex: number = offset;
        const endIndex: number = offset + limit;

        const curSearch: Search = new Search();
        let documents: IDocResultSet[] = [];
        let hasMore: boolean = false;

        let input = await translate(indexQuery);

        // input filter:
        // the filter only accepts lower case and upper case letters and ,.! and ?.
        if (!letterFilter(input)) {
            logEntry.warn('arbitrary string detected: ' + input);
            return onBadRequest(res, 'Nice try dude ;)');
        }

        // try to generate word tokens and return 400 if unsuccessful...
        let data = curSearch.tokenize(input);
        if (data.length === 0) {
            return onBadRequest(res, 'No search term submitted.');
        }

        // try to find records matching the search term:
        await curSearch.loadSearchResults(data);



        // if any records are found, return them, otherwise create a new search result.
        if (curSearch.loadedResults) {
            // apply scoring filter if set:
            if (scoringFilter) {
                curSearch.refineResults(scoreLimit);
            }

            curSearch.searchResult.documents = curSearch.searchResult.documents.slice(startIndex, endIndex);
            hasMore = hasMoreDocuments(endIndex, curSearch.searchResult.documentCount);

            console.log("Number of documents: " + curSearch.searchResult.documentCount);
            console.log("documents: " + curSearch.searchResult.documents.length);
        }
        else {
            data = curSearch.applyStemming(data);
            let curIndex = await curSearch.generateIndex(data);

            // check if any matches are found and return 404 if not.
            if (curIndex.length === 0) {
                return onNotFound(res, `No documents found for the search term: ${input}.`);
            }

            curIndex = curSearch.addScoring(curIndex);

            try {
                await curSearch.generateSearchResult(curIndex);

                // save the unmodified search result:
                await curSearch.saveResults();

                // apply scoring filter if set:
                if (scoringFilter) {
                    curSearch.refineResults(scoreLimit);
                }

                curSearch.searchResult.documents = curSearch.searchResult.documents.slice(startIndex, endIndex);
                console.log("documents: " + curSearch.searchResult.documents.length);
                hasMore = hasMoreDocuments(endIndex, curSearch.searchResult.documentCount);
                console.log("Number of documents: " + curSearch.searchResult.documentCount);
            }
            catch (err: any) {
                return onError(res, err);
            }
        }
        
        logEntry.info("Search successful");

        // determine if scoring results are added to the response or not.
        if (!addScoringToResponse) {

            for (let doc of curSearch.searchResult.documents) {
                documents.push({
                    documentTitle: doc.documentTitle,
                    url: doc.url
                });
            }
        }

        return res.json({
            status: '200 OK',
            message: "success",
            meta: {
                hasMore: hasMore,
                after_cursor: endIndex,
                before_cursor: (offset === 0) ? 0 : offset,
                limit: limit,
                documentCount: curSearch.searchResult.documentCount,
                pages: Math.ceil(curSearch.searchResult.documentCount / limit)
            },
            query: curSearch.searchResult.query,
            docs: (documents.length > 0) ? documents : curSearch.searchResult.documents
        });
    }
    catch (err: any) {
        return onError(res, err);
    }
}

/**
 * Helper function to determine, if anything is left in the search result.
 * 
 * @param endIndex 
 * @param documentCount 
 * @returns boolean
 */
function hasMoreDocuments(endIndex: number, documentCount: number): boolean {
    return endIndex < documentCount;
}