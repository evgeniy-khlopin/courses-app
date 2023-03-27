import * as types from './types.js';

export const getAuthorsAction = (payload) => ({
	type: types.GET_AUTHORS,
	payload,
});

export const createAuthorAction = (payload) => ({
	type: types.CREATE_AUTHOR,
	payload,
});
