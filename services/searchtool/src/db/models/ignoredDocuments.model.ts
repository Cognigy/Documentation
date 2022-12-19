import { model, Schema } from "mongoose";
import { IIgnoredDocument } from "./models.interfaces";

const ignoredDocumentSchema = new Schema<IIgnoredDocument>({
    title: { type: String, required: true },
});

export const IgnoredDocument = model<IIgnoredDocument>('IgnoredDocument', ignoredDocumentSchema);
