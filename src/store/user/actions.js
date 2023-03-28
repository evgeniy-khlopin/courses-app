import * as types from './types.js';

export const loginAction = (payload) => ({
	type: types.LOGIN,
	payload,
});

export const registerAction = (payload) => ({
	type: types.REGISTER,
	payload,
});

export const logoutAction = (payload) => ({
	type: types.LOGOUT,
	payload,
});

export const getCurrentUserAction = (payload) => ({
	type: types.CURRENT_USER,
	payload,
});

export const resetUserAction = () => ({
	type: types.RESET_USER,
});
