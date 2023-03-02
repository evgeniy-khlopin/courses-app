import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = (props) => {
	const [searchValue, setSearchValue] = useState('');

	const searchSubmitHandler = (value) => setSearchValue(value);

	const searchCourse = function () {
		if (searchValue === '') return props.coursesList;
		return props.coursesList.filter(
			(course) =>
				course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				course.id.toLowerCase().includes(searchValue.toLowerCase())
		);
	};

	useEffect(() => {}, [searchValue]);

	return (
		<>
			<div className='container-fluid'>
				<nav className='navbar mb-4 border-bottom pb-3'>
					<SearchBar onSearch={searchSubmitHandler}></SearchBar>
					<div className='d-flex'>
						<Button
							buttonText='Add new course'
							onClick={() => props.handleToggle(false)}
						></Button>
					</div>
				</nav>
				{searchCourse().map((course, index) => (
					<div className='mb-3' key={index}>
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
