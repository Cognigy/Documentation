import {IgnoredDocument} from "../models/ignoredDocuments.model";
import {IIgnoredDocument} from "../models/models.interfaces";

export const findAllIgnoredDocuments = async () => {
    return IgnoredDocument.find();
}

export const findIgnoredDocument = async (title: string) => {
    return IgnoredDocument.findOne({title: title});
}

export const saveIgnoredDocument = async (doc: IIgnoredDocument ) => {
    let duplicate = await IgnoredDocument.findOne({title: doc.title})

    if (duplicate === null) {
        const curDoc = new IgnoredDocument(doc);
        await curDoc.save();
        return true;
    }
    
    return false;
}

export const deleteIgnoredDocument = async (title: string) => {
    return IgnoredDocument.deleteOne({title: title});
}

export const deleteAllIgnoredDocuments = async () => {
    return IgnoredDocument.deleteMany()
}