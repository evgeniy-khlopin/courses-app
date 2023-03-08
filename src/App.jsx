import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as constants from './constants';

const App = () => {
	const [coursesList, setCoursesList] = useState(constants.mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(constants.mockedAuthorsList);
	const [showCourses, setShowCourses] = useState(true);

	const updateCoursesList = (courses) => {
		setCoursesList(courses);
	};

	const updateAuthorsList = (authors) => {
		setAuthorsList(authors);
	};

	const handleToggle = (value) => {
		setShowCourses(value);
	};

	return (
		<>
			<div className='mb-2'>
				<Header handleToggle={handleToggle} />
			</div>
			<div className='col-md-8 mx-auto'>
				{showCourses ? (
					<Courses
						authorsList={constants.mockedAuthorsList}
						coursesList={coursesList}
						handleToggle={handleToggle}
					/>
				) : (
					<CreateCourse
						coursesList={coursesList}
						authorsList={authorsList}
						updateCoursesList={updateCoursesList}
						updateAuthorsList={updateAuthorsList}
						handleToggle={handleToggle}
					/>
				)}
			</div>
		</>
	);
};

export default App;
