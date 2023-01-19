import express, { Router } from 'express';
import { getIgnored, addIgnored, deleteIgnored } from './ignored/ignored.action';
import { search } from './search/search.action';


const searchRoutes: Router = express.Router();
const ignoredRoutes: Router = express.Router();

// search endpoint.
searchRoutes.get('', search);

// ignored files endpoint:
ignoredRoutes.get('', getIgnored);
ignoredRoutes.post('', addIgnored);
ignoredRoutes.delete('', deleteIgnored);

export { searchRoutes, ignoredRoutes };
