export const fetchAuthors = async () => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/authors/all`
	);
	const data = await response.json();
	return data.result;
};

export const createAuthor = async (authorData) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/authors/add`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('bearerToken'),
			},
			body: JSON.stringify(authorData),
		}
	);
	const data = await response.json();
	return data.result;
};
