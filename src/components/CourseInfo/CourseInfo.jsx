import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const CourseInfo = ({ coursesList, authorsList }) => {
	const { courseId } = useParams();
	const [course] = useState(coursesList.find((c) => c.id === courseId));

	const authorNamesByIds = (authorsList, authorIds) => {
		const authors = authorsList.filter((author) =>
			authorIds.includes(author.id)
		);
		return authors.map((author) => author.name).join(', ');
	};

	return (
		<div className='row'>
			<div className='col-md-8 mx-auto'>
				<Link to='/courses'>← Back to courses</Link>
				<h3 className='text-center mb-5'>{course.title}</h3>
				<div className='row'>
					<div className='col-md-8'>
						<p>{course.description}</p>
					</div>
					{/* <div className='vr' /> */}
					<div className='col-md-4'>
						<div className='row'>
							<div>
								<b>ID: </b>
								{courseId}
							</div>
						</div>
						<div className='row'>
							<div>
								<b>Authors: </b>
								{authorNamesByIds(authorsList, course.authors)}
							</div>
						</div>
						<div className='row'>
							<div>
								<b>Duration: </b>
								{course.duration}
							</div>
						</div>
						<div className='row'>
							<div>
								<b>Created: </b>
								{course.creationDate}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// CourseInfo.propTypes = {

// };

export default CourseInfo;
