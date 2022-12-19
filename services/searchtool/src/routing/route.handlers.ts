import { Response } from "express";
import { serverLogs } from "../utils/logger";

const logEntry = serverLogs

// Error handlers:
// standardized error message handler:
export const onError = (res: Response, err: Error) => {
    logEntry.error(err);
    return res.status(500).json({
        status: '500 Internal Server Error',
        message: 'Something went wrong while processing the query.'
    })
};

// standardized bad request handler
export const onBadRequest = (res: Response, message: string) => {
    return res.status(400).json({
        status: '400 Bad Request', 
        message: message});
};

// standardized not found handler:
export const onNotFound = (res: Response, message: string) => {
    return res.status(404).json({
        status: '404 Not Found', 
        message: message});
}


// Filtering:
// letter filter:
export const letterFilter = (query: string): boolean => {
    let letterFilter = new RegExp('^[a-zA-Z ,.!?]+$');
    return letterFilter.test(query)
}