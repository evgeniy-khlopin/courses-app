import * as service from 'services/courseService.js';
import * as types from './types.js';
import * as actions from './actions.js';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.GET_COURSES:
			return action.payload;
		case types.DELETE_COURSE:
			return state.filter((course) => course.id !== action.payload);
		case types.CREATE_COURSE:
			return [...state, action.payload];
		default:
			return state;
	}
};

export const getCourses = () => {
	return async (dispatch) => {
		dispatch(actions.getCoursesAction(await service.fetchCourses()));
	};
};

export const deleteCourse = (courseId) => {
	return async (dispatch) => {
		dispatch(actions.deleteCourseAction(await service.deleteCourse(courseId)));
	};
};

export const createCourse = (courseData) => {
	return async (dispatch) => {
		dispatch(
			actions.createCourseAction(await service.createCourse(courseData))
		);
	};
};
