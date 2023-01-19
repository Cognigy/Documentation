import { Schema, model } from "mongoose";
import { IOOccurrence, IScoring, ISearchDocument, ISearchResult, ISubtitleScore, ITitleScore } from "./models.interfaces";

// sub document schemas:
const occurrenceScoreSchema = new Schema<IOOccurrence>({
    title: { type: Number, required: true },
    subtitle: { type: Number, required: true },
    text: { type: Number, required: true }
}, {_id: false});

const titleScoreSchema = new Schema<ITitleScore>({
    title: { type: String },
    matches: { type: [String], required: true },
    score: { type: Number, required: true }
}, {_id: false})

const subtitleScoreSchema = new Schema<ISubtitleScore>({
    subtitle: { type: String, required: true },
    matches: { type: [String], required: true },
    score: { type: Number, required: true }
}, {_id: false})

const scoringSchema = new Schema<IScoring>({
    occurrenceScore: occurrenceScoreSchema,
    baseScore: { type: Number, required: true },
    titleScore: titleScoreSchema,
    subtitleScores: [subtitleScoreSchema],
    matches: { type: Number, required: true },
    matchedWords: { type: [String], required: true }
}, {_id: false});

const searchDocumentSchema = new Schema<ISearchDocument>({
    documentId: { type: String, required: true },
    documentTitle: { type: String, required: true },
    documentSubtitles: { type: [String], required: true },
    url: { type: String, required: true },
    subUrl: { type: [String], required: true },
    scoring: scoringSchema
}, {_id: false});


// main document schema:
const searchResultSchema = new Schema<ISearchResult>({
    query: { type: [String], required: true },
    documents: [searchDocumentSchema],
    documentCount: { type: Number, required: true },
    created_at: { type: String, required: true }
});

// main document model:
export const SearchResult = model<ISearchResult>('searchResult', searchResultSchema);
