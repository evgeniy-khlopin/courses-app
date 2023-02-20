import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = (props) => {
	const [searchValue, setSearchValue] = useState('');

	const searchSubmitHandler = (value) => setSearchValue(value);

	// TODO: prevent searchCourse from being called twice
	const searchCourse = function () {
		if (searchValue === '') return props.coursesList;
		return props.coursesList.filter((course) =>
			course.title.toLowerCase().includes(searchValue.toLowerCase())
		);
	};

	useEffect(() => {}, [searchValue]);

	return (
		<>
			<nav className='navbar mb-2'>
				<div className='container-fluid'>
					<SearchBar onSearch={searchSubmitHandler}></SearchBar>
					<div className='d-flex'>
						<Button buttonText='Add new course'></Button>
					</div>
				</div>
			</nav>
			<div className='container-fluid'>
				{searchCourse().map((course, index) => (
					<div className='mb-2' key={index}>
						<CourseCard
							courseData={course}
							authorsList={props.authorsList}
						></CourseCard>
					</div>
				))}
			</div>
		</>
	);
};

export default Courses;
