import {Documents} from "../../db/models/document.model";
import {IIgnoredDocument} from "../../db/models/models.interfaces";
import {
    deleteAllIgnoredDocuments,
    deleteIgnoredDocument,
    findAllIgnoredDocuments,
    saveIgnoredDocument
} from "../../db/service/ignored.service";


export class IgnoredDocuments {
    
    async addDocument(title: string): Promise<boolean> {
        let checkTitle = Documents.findOne({ title: title })

        if (checkTitle != null) {
            let doc: IIgnoredDocument = { title: title };
            return await saveIgnoredDocument(doc)
        }

        return false;
        
    }

    async deleteDocument(title: string) {
        return await deleteIgnoredDocument(title)
    }

    async deleteAllDocuments() {
        return await deleteAllIgnoredDocuments()
    }

    async getDocuments() {
        return await findAllIgnoredDocuments();
    }
}