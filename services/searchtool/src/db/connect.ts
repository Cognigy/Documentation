import mongoose from "mongoose";
import {generate_db_uri} from "../utils/helper";

/**
 * Encapsulation for establishing a database connection
 * It requires the actual name of the database to connect to.
 * The method also checks if a connection could be established.
 *
 * To connect the connection method to a health check service, just add
 * the relevant code in the .on() section or add a .catch() after the initial promise.
 *
 * @param database
 */
export default function createConnection(database: string) {
    const connectionString = generate_db_uri(database)

    mongoose.Promise = global.Promise
    mongoose.connect(connectionString).then()
    mongoose.connection
        .once('open', () => console.log('connection established'))
        .on('error', (err: any) => console.log(err));
}