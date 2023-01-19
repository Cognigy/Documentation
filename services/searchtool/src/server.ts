import express, { Application }  from 'express';
import helmet from 'helmet';

import { ignoredRoutes, searchRoutes } from './routing/routs';
import createConnection from './db/connect';

/**
 * Function to create the server application.
 * The function prepares and creates the server instance to be used either to run the application as a service
 * or to spawn an instance to test it.
 *
 * @param database
 * @returns an instance of server
 */
export default function createServer(database: string): Application {
    const server: Application = express();

    createConnection(database)

    // register middleware:
    server.use(helmet());
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }));

    // register routes:
    server.use('/search', searchRoutes)
    server.use('/ignored', ignoredRoutes)

    return server
}