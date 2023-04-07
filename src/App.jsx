import CourseForm from 'components/CourseForm/CourseForm';
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
import { getCourses } from 'store/courses/thunk';
import { getAuthors } from 'store/authors/thunk';
import { currentUser } from 'store/user/thunk';
import { getUserSelector } from 'store/user/selectors';

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(getUserSelector);

	useEffect(() => {
		dispatch(currentUser());
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
				<Route index element={<Navigate to='/courses' />} />
				<Route
					path='/courses'
					element={
						<PrivateRoute>
							<Courses />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute redirectPath='/courses' user={user} adminOnly>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/:courseId'
					element={
						<PrivateRoute>
							<CourseInfo />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/:courseId/edit'
					element={
						<PrivateRoute redirectPath='/courses' user={user} adminOnly>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
