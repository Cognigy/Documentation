/**
 * Test helper that runs before and after every test suite.
 * It sets up the test database connection and clears the test data after the tests are done.
 */
import mongoose, { MongooseError } from "mongoose"

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test_index').then()

mongoose.connection.once('open', () => console.log("connected to test db")).on('error', (error: any) => console.log("Error: ", error))

after((done) => {
    mongoose.connection.collections.ignoreddocuments.drop().then()
    mongoose.connection.collections.documents.drop().then()
    mongoose.connection.collections.index.drop().then()
    mongoose.connection.collections.searchresults.drop().then()

    // TODO: remove the test database after the tests are done.

    done()
})