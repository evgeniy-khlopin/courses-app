import CreateCourse from 'components/CreateCourse/CreateCourse';
import { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from 'components/CourseInfo/CourseInfo';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'common/PrivateRoute/PrivateRoute';
import NotFound from 'common/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from 'store/courses/reducer';
import { getAuthors } from 'store/authors/reducer';
import { getCoursesSelector } from 'store/courses/selectors';
import { getAuthorsSelector } from 'store/authors/selectors';

const App = () => {
	const coursesList = useSelector(getCoursesSelector);
	const authorsList = useSelector(getAuthorsSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCourses());
		dispatch(getAuthors());
	}, [dispatch]);

	return (
		<>
			<div className='mb-2'>
				<Header />
			</div>
			<Routes>
				<Route index path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route element={<PrivateRoute />}>
					<Route index element={<Navigate to='/courses' />} />
					<Route
						path='/courses'
						element={
							<Courses authorsList={authorsList} coursesList={coursesList} />
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								coursesList={coursesList}
								authorsList={authorsList}
							/>
						}
					/>
					<Route
						path='/courses/:courseId'
						element={
							<CourseInfo coursesList={coursesList} authorsList={authorsList} />
						}
					/>
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
