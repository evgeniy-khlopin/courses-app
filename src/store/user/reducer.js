import * as types from './types.js';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	successful: false,
	loginSuccessful: true,
	errors: [],
	role: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			if (action.payload.successful) {
				return {
					...state,
					name: action.payload.user.name,
					email: action.payload.user.email,
					token: action.payload.result,
					loginSuccessful: true,
					isAuth: true,
				};
			}
			return { ...state, loginSuccessful: false };
		case types.REGISTER:
			if (action.payload.successful) {
				return { ...state, successful: true };
			}
			return {
				...state,
				successful: false,
				errors: action.payload.errors,
			};
		case types.LOGOUT:
		case types.RESET_USER:
			return userInitialState;
		case types.CURRENT_USER:
			return {
				...state,
				name: action.payload.result.name,
				email: action.payload.result.email,
				isAuth: action.payload.successful,
				role: action.payload.result.role,
			};
		default:
			return state;
	}
};
