import * as types from './types.js';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.GET_COURSES:
			return action.payload;
		case types.DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		case types.CREATE_COURSE:
			return [...state, action.payload];
		case types.UPDATE_COURSE:
			return state.map((course) => {
				return course.id === action.payload.id ? action.payload : course;
			});
		default:
			return state;
	}
};
