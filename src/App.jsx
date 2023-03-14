import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useState } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as constants from './constants';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from 'components/CourseInfo/CourseInfo';
import { userExists } from 'helpers/userHelper';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'common/PrivateRoute/PrivateRoute';
import NotFound from 'common/NotFound/NotFound';

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
				<div className='mb-2'>
					<Header />
				</div>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registration />} />
					<Route element={<PrivateRoute userExists={userExists()} />}>
						<Route index element={<Navigate to='/courses' />} />
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
							path='/courses/:courseId'
							element={
								<CourseInfo
									coursesList={coursesList}
									authorsList={authorsList}
								/>
							}
						/>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
