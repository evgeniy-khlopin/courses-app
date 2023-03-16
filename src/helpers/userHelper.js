export const userName = () => {
	return localStorage.getItem('userName');
};

export const userExists = () => {
	return localStorage.getItem('bearerToken') !== null;
};

export const logoutUser = () => {
	localStorage.removeItem('bearerToken');
	localStorage.removeItem('userName');
};

export const loginUser = async (loginData, _callback) => {
	const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginData),
	});
	const json = await response.json();
	if (json.successful) {
		localStorage.setItem('userName', json.user.name);
		localStorage.setItem('bearerToken', json.result);
		_callback();
	}
	return json;
};

export const registerUser = async (userData, _callback) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/register`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		}
	);
	const json = await response.json();
	if (json.successful) {
		_callback();
	}
	return json;
};
