import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import * as Constants from './constants';

function App() {
	return (
		<div>
			<div className='mb-2'>
				<Header></Header>
			</div>
			<Courses
				authorsList={Constants.mockedAuthorsList}
				coursesList={Constants.mockedCoursesList}
			></Courses>
		</div>
	);
}

export default App;
