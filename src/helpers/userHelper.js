export const userName = () => {
	return localStorage.getItem('userName');
};

export const userExists = () => {
	return localStorage.getItem('bearerToken') !== null;
};

export const isAdmin = (user) => {
	return user.role === 'admin';
};
