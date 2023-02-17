import CourseCard from './components/Courses/components/CourseCard/CourseCard';
import Header from './components/Header/Header';
import * as Constants from './constants';

function App() {
	return (
		<div>
			<Header></Header>
			{Constants.mockedCoursesList.map((course, index) => (
				<CourseCard courseData={course} key={index}></CourseCard>
			))}
		</div>
	);
}

export default App;
