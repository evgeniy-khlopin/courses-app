import * as service from 'services/authorService.js';
import * as types from './types.js';
import * as actions from './actions.js';

export const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case types.GET_AUTHORS:
			return action.payload;
		case types.CREATE_AUTHOR:
			return [...state, action.payload];
		default:
			return state;
	}
};

export const getAuthors = () => {
	return async (dispatch) => {
		dispatch(actions.getAuthorsAction(await service.fetchAuthors()));
	};
};

export const createAuthor = (authorData) => {
	return async (dispatch) => {
		dispatch(
			actions.createAuthorAction(await service.createAuthor(authorData))
		);
	};
};
