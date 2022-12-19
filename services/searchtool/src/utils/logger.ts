import { createLogger, transports, format } from 'winston';
import { MongoDB } from 'winston-mongodb';
import {generate_db_uri} from "./helper";
const {combine, timestamp, json, errors} = format;

/**
 * Logging instance for writing server related logs to the database.
 * It also enables the application to keep running in case of an error.
 * In order to change this behavior, set exitOnError to true.
 * The logging instance also catches unhandled errors and those occurring in promises.
 *
 */
export const serverLogs = createLogger({
    transports: [
        // store logs with at least error level in database:
        new MongoDB({
            level: 'warn',
            db: generate_db_uri("documentation_logs"),
            options: {
                useUnifiedTopology: true
            },
            collection: 'server_logs',
            storeHost: true,
            tryReconnect: true,
            leaveConnectionOpen: false
        }),
        // write logs below error level to console:
        new transports.Console({format: combine(
            timestamp({format: 'Do MMM, YYYY hh:mm:ss a Z'}),
            errors({stack: true})
        )})
    ],
    // default format:
    format: combine(
        timestamp({format: 'Do MMM, YYYY hh:mm:ss a Z'}), 
        json()
    ),
    // legging level:
    level: 'info',
    // catch unhandled exceptions:
    exceptionHandlers: [
        new MongoDB({
            level: 'error',
            db: generate_db_uri("documentation_logs"),
            options: {
                useUnifiedTopology: true
            },
            collection: 'server_crash_logs',
            storeHost: true,
            tryReconnect: true,
            leaveConnectionOpen: false
        })
    ],
    // catch errors in promises:
    rejectionHandlers: [
        new MongoDB({
            level: 'error',
            db: generate_db_uri("documentation_logs"),
            options: {
                useUnifiedTopology: true
            },
            collection: 'server_async_logs',
            storeHost: true,
            tryReconnect: true,
            leaveConnectionOpen: false
        })
    ],
    // define what to do if an error occurs (shut down or keep running):
    exitOnError: false,
})