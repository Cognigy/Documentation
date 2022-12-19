import { Request, Response } from "express";
import { IgnoredDocuments } from "./ignored.controller";
import { letterFilter, onBadRequest, onError, onNotFound } from "../route.handlers";

const controller = new IgnoredDocuments

/**
 * route action to add one or more documents to the ignored list.
 *
 * @param req
 * @param res
 */
export const addIgnored = async (req: Request, res: Response) => {
    let data = req.body;
    let message = ""

    if (!data[0]) return onBadRequest(res, "The body needs to be a JSON array.")
    if (!data[0].title) return onBadRequest(res, "At least one title has to be provided");

    for (let i = 0; i < data.length; i++) {
        const valid = letterFilter(data[i].title)
        if (!valid) {
            return onBadRequest(res, "Nice try dude ;)" )
        }
    }

    try {
        for (let i = 0; i < data.length; i++) {
            let status = await controller.addDocument(data[i].title);

            if (status) {
                message += data[i].title + " added successfully to ignored list.";
            }
            else {
                message += data[i].title + " already on ignored list or not a legit title.";
            }
        }

        return res.status(200).json({message: message})
    }
    catch (err: any) {
        return onError(res, err);
    }
}

/**
 * rout action to retrieve the list of ignored documents
 *
 * @param req
 * @param res
 */
export const getIgnored = async (req: Request, res: Response) => {
    try {
        let ignoredDocuments = await controller.getDocuments();

        return res.status(200).json({
            status: "success",
            message: "all ignored files",
            data: ignoredDocuments
        })
    }
    catch (err: any) {
        return onError(res, err);
    }
    
}

/**
 * route action to delete one or more documents or all documents from the ignored list.
 *
 * @param req
 * @param res
 */
export const deleteIgnored = async (req: Request, res: Response) => {
    const deleteAll: boolean = (req.query.deleteAll as string === 'true') || false
    let data = req.body;

    // do the validation only if the deletion does not contain everything.
    if (!deleteAll) {
        if (!data[0]) return onBadRequest(res, 'The body has to be a JSON array')
        if (!data[0].title) return onBadRequest(res, 'At least one title has to be provided.');

        for (let i = 0; i < data.length; i++) {
            const valid = letterFilter(data[i].title)
            if (!valid) {
                return onBadRequest(res, "Nice try dude ;)" )
            }
        }
    }

    try {
        let deletion = 0

        if (deleteAll) {
            deletion = (await controller.deleteAllDocuments()).deletedCount
        }
        else {
            for (let i = 0; i < data.length; i++) {
                let curCount = await controller.deleteDocument(data[i].title)
                deletion += curCount.deletedCount
            }

            console.log(deletion);
        }


        if (deletion > 0) {
            return res.status(200).json({message: "deleted ignored title(s)"})
        }
        else {
            return onNotFound(res, "No document found that matches the request.")
        }
    }
    catch (err: any) {
        return onError(res, err);
    }
    
}