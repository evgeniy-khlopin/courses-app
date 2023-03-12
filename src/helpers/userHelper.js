export const userName = () => {
	return localStorage.getItem('userName');
};

export const userExists = () => {
	return localStorage.getItem('bearerToken') !== null;
};

export const logoutUser = () => {
	localStorage.removeItem('bearerToken');
};
