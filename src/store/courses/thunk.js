import * as service from 'services/courseService.js';
import * as actions from './actions.js';

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

export const updateCourse = (courseData) => {
	return async (dispatch) => {
		dispatch(
			actions.updateCourseAction(await service.updateCourse(courseData))
		);
	};
};
