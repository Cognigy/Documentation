/**
 * Service collection for database operations regarding search results.
 * Services available:
 * 1. check if a search result exists based on the query (findSearchResult)
 * 2. save the current search result for later reuse (saveSearchResult)
 *
 */
import {ISearchResult} from "../models/models.interfaces";
import {SearchResult} from "../models/searchResult.model";

/**
 * Method to retrieve a stored search result based on the query.
 *
 * @param query
 */
export const findSearchResult = async (query: string[]) => {
    return SearchResult.findOne({'query': query});
}

/**
 * Method to save the search result as a form of cache.
 *
 * @param doc
 */
export const saveSearchResult = async (doc: ISearchResult) => {
    let result = await SearchResult.findOne({documentCount: doc.documentCount})

    if (result === null) {
        const curSearchResult = new SearchResult(doc);
        await curSearchResult.save();
    }
}