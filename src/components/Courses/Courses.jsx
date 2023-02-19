import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = (props) => {
	return (
		<>
			<nav className='navbar mb-2'>
				<div className='container-fluid'>
					<SearchBar></SearchBar>
					<div className='d-flex'>
						<Button buttonText='Add new course'></Button>
					</div>
				</div>
			</nav>
			<div className='container-fluid'>
				{props.coursesList.map((course, index) => (
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
