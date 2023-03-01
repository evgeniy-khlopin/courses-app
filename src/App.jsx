import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as constants from './constants';

function App() {
	const [coursesList, setCoursesList] = useState(constants.mockedCoursesList);
	const [showCourses, setShowCourses] = useState(true);

	const updateCoursesList = function (courses) {
		setCoursesList(courses);
	};

	const handleToggle = function () {
		setShowCourses((prevState) => !prevState);
	};

	return (
		<div>
			<div className='mb-2'>
				<Header handleToggle={handleToggle}></Header>
			</div>
			{showCourses ? (
				<Courses
					authorsList={constants.mockedAuthorsList}
					coursesList={coursesList}
				></Courses>
			) : (
				<CreateCourse
					authorsList={constants.mockedAuthorsList}
					coursesList={coursesList}
					updateCoursesList={updateCoursesList}
				></CreateCourse>
			)}
		</div>
	);
}

export default App;
