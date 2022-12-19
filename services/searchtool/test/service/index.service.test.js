"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const document_model_1 = require("../../src/db/models/document.model");
const index_model_1 = require("../../src/db/models/index.model");
const index_service_1 = require("../../src/db/service/index.service");
describe('index service', () => {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const testDoc = new document_model_1.Documents({
            title: 'test document 2',
            subtitle: [
                "cases",
                "resolutions",
                "methods"
            ],
            url: 'http://example.com',
            indexed_at: "2022"
        });
        yield testDoc.save();
        // index the title:
        for (let word of testDoc.title.split(' ')) {
            yield createEntry(word, testDoc, "title");
        }
        // index the subtitles:
        for (let subtitle of testDoc.subtitle) {
            for (let word of subtitle.split(" ")) {
                yield createEntry(word, testDoc, "subtitle");
            }
        }
    }));
    it('should find one entry by word', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, index_service_1.findIndex)("test").then((result) => {
            (0, chai_1.expect)(result).not.to.be.null;
            (0, chai_1.expect)(result).to.be.instanceOf(index_model_1.Index);
        }).catch(err => { console.log(err); });
    }));
});
// helper function to create a new index entry:
function createEntry(word, testDoc, key) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!parseInt(word, 10)) {
            let index = new index_model_1.Index({
                word: word,
                meta_data: {
                    document_id: testDoc.id,
                    occurance: (key == "title") ? ["title"] : ["subtitle"]
                },
                created_at: "2022",
                updated_at: "2022"
            });
            yield index.save();
        }
    });
}
