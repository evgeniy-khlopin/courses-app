export const fetchCourses = async () => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/courses/all`
	);
	const data = await response.json();
	return data.result;
};

export const deleteCourse = async (courseId) => {
	fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${courseId}`, {
		method: 'DELETE',
		headers: {
			Authorization: localStorage.getItem('bearerToken'),
		},
	});
	return courseId;
};

export const createCourse = async (courseData) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/courses/add`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('bearerToken'),
			},
			body: JSON.stringify(courseData),
		}
	);
	const data = await response.json();
	return data.result;
};

export const updateCourse = async (courseData) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_BASE_URL}/courses/${courseData.id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('bearerToken'),
			},
			body: JSON.stringify(courseData),
		}
	);
	const data = await response.json();
	return data.result;
};
