import { expect } from 'chai';
import { Search } from '../../src/routing/search/search.controller';

describe('search controller', () => {
    let search: Search;
    let testCase: string;
    let words: string[];

    before(() => {
        search = new Search();
        testCase = 'This is some test query'
    })

    describe('preparation handlers', () => {
        it('should return an array of tokens', () => {
            words = search.tokenize(testCase);

            expect(words).to.be.an("array");
            expect(typeof words[0]).to.equal('string');
            expect(words.length).not.to.equal(testCase.split(' ').length);            
        })

        it('should apply stemming', () => {
            let stemmedWords = search.applyStemming(words);

            expect(stemmedWords).to.be.an('array');
            expect(stemmedWords.length).to.equal(words.length);
        })
    })

    describe('database operations', () => {
        
    })
})