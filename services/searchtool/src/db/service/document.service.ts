/**
 * Service collection for database operations regarding documents.
 * Services available:
 * 1. find one document based on its ID (findDocument)
 *
 */
import {Documents} from "../models/document.model";

/**
 * method to retrieve a document from the database by its ID
 *
 * @param id
 */
export const findDocument = async (id: string) => {
    return Documents.findById(id, 'title subtitle url');
};