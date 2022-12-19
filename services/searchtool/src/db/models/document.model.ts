import { Schema, model } from "mongoose";
import { IDocument } from "./models.interfaces";

/**
 * Schema definition describing a document that has been indexed.
 *
 * This schema/model is currently not used.
 */
const documentSchema = new Schema<IDocument>({
    title: { type: String, required: true },
    subtitle: { type: [String], required: true },
    url: { type: String, required: true },
    indexed_at: { type: String, required: true}
});

/**
 * The actual database model created from the schema definition.
 */
export const Documents = model<IDocument>('Document', documentSchema);
