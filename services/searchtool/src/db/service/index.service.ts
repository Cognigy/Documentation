import { Index } from "../models/index.model";

export const findIndex = async (search: string) => {
    const doc = await Index.findOne({"word": search})
    return doc;
}