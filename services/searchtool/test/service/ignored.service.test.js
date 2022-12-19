"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ignoredDocuments_model_1 = require("../../src/db/models/ignoredDocuments.model");
const ignored_service_1 = require("../../src/db/service/ignored.service");
describe("ignored document service", () => {
    let testIgnored;
    before(() => {
        testIgnored = new ignoredDocuments_model_1.IgnoredDocument({ title: "test_document" });
    });
    it("adds a new ignored document entry", (done) => {
        (0, ignored_service_1.saveIgnoredDocument)(testIgnored).then((result) => {
            (0, chai_1.expect)(result).to.be.true;
            done();
        });
    });
    it("detects duplicate entrys and skips adding", (done) => {
        (0, ignored_service_1.saveIgnoredDocument)(testIgnored).then((result) => {
            (0, chai_1.expect)(result).to.be.false;
            done();
        });
    });
    it('should find all documents', (done) => {
        (0, ignored_service_1.findAllIgnoredDocuments)().then((result) => {
            (0, chai_1.expect)(result).not.to.be.null;
            (0, chai_1.expect)(result.length).to.equal(1);
            done();
        });
    });
    it('should find a document by its title', (done) => {
        (0, ignored_service_1.findIgnoredDocument)(testIgnored.title).then((result) => {
            (0, chai_1.expect)(result).not.to.be.null;
            (0, chai_1.expect)(result === null || result === void 0 ? void 0 : result.title).to.equal(testIgnored.title);
            done();
        });
    });
    it('deletes a document by its title', (done) => {
        (0, ignored_service_1.deleteIgnoredDocument)(testIgnored.title).then((result) => {
            (0, chai_1.expect)(result).not.to.be.null;
            (0, chai_1.expect)(result.deletedCount).to.equal(1);
            done();
        });
    });
});
