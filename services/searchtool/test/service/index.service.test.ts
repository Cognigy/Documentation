import { expect } from 'chai';
import { Documents } from '../../src/db/models/document.model';
import { Index } from '../../src/db/models/index.model';
import { findIndex } from '../../src/db/service/index.service';

describe('index service', () => {

    before(async () => {
        const testDoc = new Documents({
            title: 'test document 2',
            subtitle: [
                "cases",
                "resolutions",
                "methods"
            ],
            url: 'https://example.com',
            indexed_at: "2022"
        })

        await testDoc.save()

        // index the title:
        for ( let word of testDoc.title.split(' ')) {
            await createEntry(word, testDoc, "title")
        }

        // index the subtitles:
        for (let subtitle of testDoc.subtitle) {
            for (let word of subtitle.split(" ")) {
                await createEntry(word, testDoc, "subtitle")
            }
        }
    })

    it('should find one entry by word', async () => {
        findIndex("test").then((result) => {
            expect(result).not.to.be.null
            expect(result).to.be.instanceOf(Index)
        }).catch(err => {console.log(err)})
    })
})

// helper function to create a new index entry:
async function createEntry(word: string, testDoc: any, key: string) {
    if (!parseInt(word, 10)) {
        let index = new Index({
            word: word,
            meta_data: {
                document_id: testDoc.id,
                occurrence: (key == "title") ? ["title"] : ["subtitle"]
            },
            created_at: "2022",
            updated_at: "2022"
        })

        await index.save()
    }
}