import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as constants from './constants';

function App() {
	const [coursesList, setCoursesList] = useState(constants.mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(constants.mockedAuthorsList);
	const [showCourses, setShowCourses] = useState(true);

	const updateCoursesList = function (courses) {
		setCoursesList(courses);
	};

	const updateAuthorsList = function (authors) {
		setAuthorsList(authors);
	};

	const handleToggle = function (value) {
		setShowCourses(value);
	};

	return (
		<div>
			<div className='mb-2'>
				<Header handleToggle={handleToggle}></Header>
			</div>
			<div className='col-md-8 mx-auto'>
				{showCourses ? (
					<Courses
						authorsList={constants.mockedAuthorsList}
						coursesList={coursesList}
						handleToggle={handleToggle}
					></Courses>
				) : (
					<CreateCourse
						coursesList={coursesList}
						authorsList={authorsList}
						updateCoursesList={updateCoursesList}
						updateAuthorsList={updateAuthorsList}
						handleToggle={handleToggle}
					></CreateCourse>
				)}
			</div>
		</div>
	);
}

export default App;
