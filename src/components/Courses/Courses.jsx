import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { isAdmin } from 'helpers/userHelper';
import { useSelector } from 'react-redux';
import { getUserSelector } from 'store/user/selectors';
import { getAuthorsSelector } from 'store/authors/selectors';
import { getCoursesSelector } from 'store/courses/selectors';

const Courses = () => {
	const [searchValue, setSearchValue] = useState('');

	const searchSubmitHandler = (value) => setSearchValue(value);
	const user = useSelector(getUserSelector);
	const authorsList = useSelector(getAuthorsSelector);
	const coursesList = useSelector(getCoursesSelector);

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
				{isAdmin(user) && (
					<div className='d-flex'>
						<Link to='/courses/add'>
							<Button buttonText='Add new course' />
						</Link>
					</div>
				)}
			</nav>
			{searchCourse().map((course, index) => (
				<div className='mb-3' key={index}>
					<CourseCard courseData={course} authorsList={authorsList} />
				</div>
			))}
		</div>
	);
};

export default Courses;
