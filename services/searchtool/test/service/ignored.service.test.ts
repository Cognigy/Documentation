import { expect } from 'chai';
import { IgnoredDocument } from "../../src/db/models/ignoredDocuments.model";
import { IIgnoredDocument } from '../../src/db/models/models.interfaces';
import {
    findAllIgnoredDocuments,
    saveIgnoredDocument,
    findIgnoredDocument,
    deleteIgnoredDocument,
    deleteAllIgnoredDocuments
} from '../../src/db/service/ignored.service';


describe("ignored document service", () => {
    let testIgnored: IIgnoredDocument

    before(() => {
        testIgnored = new IgnoredDocument({ title: "test_document"});
    })

    it("adds a new ignored document entry", (done) => {
        saveIgnoredDocument(testIgnored).then((result) => {
            expect(result).to.be.true;

            done()
        });
    })

    it("detects duplicate entries and skips adding", (done) => {
        saveIgnoredDocument(testIgnored).then((result) => {
            expect(result).to.be.false;

            done() 
        });
    })

    it('should find all documents', (done) => {
        findAllIgnoredDocuments().then((result) => {
            expect(result).not.to.be.null;
            expect(result.length).to.equal(1);

            done()
        })
    })

    it('should find a document by its title', (done) => {
        findIgnoredDocument(testIgnored.title).then((result) => {
            expect(result).not.to.be.null
            expect(result?.title).to.equal(testIgnored.title)

            done()
        }) 
    })

    it('deletes a document by its title', (done) => {
        deleteIgnoredDocument(testIgnored.title).then((result) => {
            expect(result).not.to.be.null
            expect(result.deletedCount).to.equal(1)

            done()
        })
    })

    it('deletes all documents from the list', (done) => {
        // create test documents:
        let testIgnored = new IgnoredDocument({title: "test_document"});
        let testIgnored2 = new IgnoredDocument({title: "test_document"});
        let testIgnored3 = new IgnoredDocument({title: "test_document"});

        // save them:
        testIgnored.save()
        testIgnored2.save()
        testIgnored3.save()

        // delete them all:
        deleteAllIgnoredDocuments().then((result) => {
            expect(result).not.to.be.null;
            expect(result.deletedCount).to.equal(3)

            done()
        })
    })
})

