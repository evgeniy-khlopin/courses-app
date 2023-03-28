import * as service from 'services/userService.js';
import * as actions from './actions.js';
import * as types from './types.js';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	successful: false,
	loginSuccessful: true,
	errors: [],
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
			return userInitialState;
		case types.CURRENT_USER:
			return {
				...state,
				name: action.payload.result.name,
				email: action.payload.result.email,
				isAuth: action.payload.successful,
			};
		default:
			return state;
	}
};

export const login = (userData) => {
	return async (dispatch) => {
		dispatch(actions.loginAction(await service.loginUser(userData)));
	};
};

export const register = (userData) => {
	return async (dispatch) => {
		dispatch(actions.registerAction(await service.registerUser(userData)));
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch(actions.logoutAction(await service.logoutUser()));
	};
};

export const currentUser = () => {
	return async (dispatch) => {
		dispatch(actions.getCurrentUserAction(await service.currentUser()));
	};
};
