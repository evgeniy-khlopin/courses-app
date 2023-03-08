import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = ({ coursesList, authorsList, handleToggle }) => {
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
		<div className='container-fluid'>
			<nav className='navbar mb-4 border-bottom pb-3'>
				<SearchBar onSearch={searchSubmitHandler} />
				<div className='d-flex'>
					<Button
						buttonText='Add new course'
						onClick={() => handleToggle(false)}
					/>
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

export default Courses;
