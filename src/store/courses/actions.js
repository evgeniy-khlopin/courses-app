import * as types from './types.js';

export const getCoursesAction = (payload) => ({
	type: types.GET_COURSES,
	payload,
});

export const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});

export const createCourseAction = (payload) => ({
	type: types.CREATE_COURSE,
	payload,
});

export const updateCourseAction = (payload) => ({
	type: types.UPDATE_COURSE,
	payload,
});
