import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as constants from './constants';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from 'components/CourseInfo/CourseInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	const [coursesList, setCoursesList] = useState(constants.mockedCoursesList);
	const [authorsList, setAuthorsList] = useState(constants.mockedAuthorsList);

	const updateCoursesList = (courses) => {
		setCoursesList(courses);
	};

	const updateAuthorsList = (authors) => {
		setAuthorsList(authors);
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route
						path='/courses'
						element={
							<Courses
								authorsList={constants.mockedAuthorsList}
								coursesList={coursesList}
							/>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								coursesList={coursesList}
								authorsList={authorsList}
								updateCoursesList={updateCoursesList}
								updateAuthorsList={updateAuthorsList}
							/>
						}
					/>
					<Route
						path='/courses/:id'
						element={
							<CourseInfo
								coursesList={constants.mockedCoursesList}
								authorsList={constants.mockedAuthorsList}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>

		// <>
		// 	<div className='mb-2'>
		// 		<Header handleToggle={handleToggle} />
		// 	</div>
		// 	<div className='col-md-8 mx-auto'>
		// 		{showCourses ? (
		// 			<Courses
		// 				authorsList={constants.mockedAuthorsList}
		// 				coursesList={coursesList}
		// 				handleToggle={handleToggle}
		// 			/>
		// 		) : (
		// 			<CreateCourse
		// 				coursesList={coursesList}
		// 				authorsList={authorsList}
		// 				updateCoursesList={updateCoursesList}
		// 				updateAuthorsList={updateAuthorsList}
		// 				handleToggle={handleToggle}
		// 			/>
		// 		)}
		// 	</div>
		// </>
	);
};

export default App;
