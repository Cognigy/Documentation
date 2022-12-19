import { should } from 'chai';
import { Application, Request } from 'express';
import supertest from 'supertest'

import createServer from '../../src/server';

/**
 * Test suite for testing the whole server process and its modules.
 */
describe('testing the server', () => {
    let app: Application = createServer("test_index")

    before(() => {
        
    })

    // test suite for search endpoint
    describe('testing the search endpoint', () => {
        it('should return 400 on missing inputs', (done) => {
            supertest(app).get('/search').expect(400)

            done()
        })
    })

    // test suite for ingnored documents endpoint
    describe('testing the ignored documents endpoint', () => {})
    
})