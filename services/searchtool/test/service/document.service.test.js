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
const document_service_1 = require("../../src/db/service/document.service");
describe("document service", () => {
    let testDoc;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        testDoc = new document_model_1.Documents({
            title: "test document",
            subtitle: ["test subtitle"],
            url: "http://example.com",
            indexed_at: "2022"
        });
        // save the document since the service is only used for fetching data not storing.
        yield testDoc.save();
    }));
    it('should find existing documents', (done) => {
        let id = testDoc.id;
        (0, document_service_1.findDocument)(id).then((result) => {
            var _a;
            (0, chai_1.expect)(result).not.to.be.null;
            (0, chai_1.expect)(result).to.be.instanceOf(document_model_1.Documents);
            (0, chai_1.expect)(result === null || result === void 0 ? void 0 : result.title).to.equal(testDoc.title);
            (0, chai_1.expect)(result === null || result === void 0 ? void 0 : result.subtitle).to.be.a('array');
            (0, chai_1.expect)((_a = result === null || result === void 0 ? void 0 : result.subtitle) === null || _a === void 0 ? void 0 : _a.length).to.equal(testDoc.subtitle.length);
            (0, chai_1.expect)(result === null || result === void 0 ? void 0 : result.url).to.equal(testDoc.url);
            done();
        }).catch(err => console.log(err));
    });
});
