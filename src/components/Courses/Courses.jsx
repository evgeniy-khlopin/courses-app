import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Courses = ({ coursesList, authorsList }) => {
	const [searchValue, setSearchValue] = useState('');

	const searchSubmitHandler = (value) => setSearchValue(value);

	const searchCourse = () => {
		if (searchValue === '') return coursesList;
		return coursesList.filter(
			(course) =>
				course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				course.id.toLowerCase().includes(searchValue.toLowerCase())
		);
	};

	return (
		<div className='container-fluid col-md-8'>
			<nav className='navbar mb-4 border-bottom pb-3'>
				<SearchBar onSearch={searchSubmitHandler} />
				<div className='d-flex'>
					<Link to='/courses/add'>
						<Button buttonText='Add new course' />
					</Link>
				</div>
			</nav>
			{searchCourse().map((course, index) => (
				<div className='mb-3' key={index}>
					<CourseCard courseData={course} authorsList={authorsList} />
				</div>
			))}
		</div>
	);
};

Courses.propTypes = {
	coursesList: PropTypes.arrayOf(PropTypes.object).isRequired,
	authorsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Courses;
