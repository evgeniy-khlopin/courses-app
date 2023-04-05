import * as service from 'services/userService.js';
import * as actions from './actions.js';

export const login = (userData) => {
	return async (dispatch) => {
		const response = await service.loginUser(userData);
		dispatch(actions.loginAction(response));
		dispatch(actions.getCurrentUserAction(await service.currentUser()));
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
		const response = await service.currentUser();
		dispatch(actions.getCurrentUserAction(response));
	};
};

export const resetUser = () => {
	return async (dispatch) => {
		dispatch(actions.resetUserAction());
	};
};
