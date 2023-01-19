import { Schema, model } from "mongoose";
import { IIndex, IIndexMetaData } from "./models.interfaces";


const indexMetaDataSchema = new Schema<IIndexMetaData>({
    document_id: { type: String },
    occurrence: { type: [String]},
    line: { type: [Number]}
}, {_id: false});

const indexSchema = new Schema<IIndex>({
    word: { type: String, required: true },
    meta_data: [indexMetaDataSchema],
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true }
}, { collection: 'index'});

export const Index = model<IIndex>('Index', indexSchema)
