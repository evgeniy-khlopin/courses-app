export const logoutUser = async () => {
	fetch(`${process.env.REACT_APP_API_BASE_URL}/logout`, {
		method: 'DELETE',
		headers: {
			Authorization: localStorage.getItem('bearerToken'),
			'Content-Type': 'application/json',
		},
	});
	localStorage.removeItem('bearerToken');
};

export const loginUser = async (loginData) => {
	const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginData),
	});
	const json = await response.json();
	if (json.successful) localStorage.setItem('bearerToken', json.result);
	return json;
};

export const registerUser = async (userData) => {
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
	return json;
};

export const currentUser = async () => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/users/me`,
		{
			headers: {
				Authorization: localStorage.getItem('bearerToken'),
				'Content-Type': 'application/json',
			},
		}
	);
	const json = await response.json();
	return json;
};
