export const userName = () => {
	return localStorage.getItem('userName');
};

export const userExists = () => {
	return localStorage.getItem('bearerToken') !== null;
};
