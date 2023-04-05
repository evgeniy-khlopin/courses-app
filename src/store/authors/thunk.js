import * as service from 'services/authorService.js';
import * as actions from './actions.js';

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
