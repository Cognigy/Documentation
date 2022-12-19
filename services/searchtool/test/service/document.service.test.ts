import { expect } from 'chai';
import { Documents } from '../../src/db/models/document.model'
import { findDocument } from '../../src/db/service/document.service';


describe("document service", () => {
    let testDoc: any;

    before( async () => {
        testDoc = new Documents({
            title: "test document",
            subtitle: ["test subtitle"],
            url: "http://example.com",
            indexed_at: "2022"
        });

        // save the document since the service is only used for fetching data not storing.
        await testDoc.save()
    })

    it('should find existing documents', (done) => {
        let id: string = testDoc.id
        
        findDocument(id).then((result) => {
            expect(result).not.to.be.null
            expect(result).to.be.instanceOf(Documents)
            expect(result?.title).to.equal(testDoc.title)
            expect(result?.subtitle).to.be.a('array')
            expect(result?.subtitle?.length).to.equal(testDoc.subtitle.length)
            expect(result?.url).to.equal(testDoc.url)

            done()
        }).catch(err => console.log(err))
    })
})