import * as types from './types.js';

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
