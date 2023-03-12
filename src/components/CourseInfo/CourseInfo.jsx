import { formatDate } from 'helpers/formatDate';
import { getAuthorNames } from 'helpers/getAuthorNames';
import { convertDuration } from 'helpers/getCourseDuration';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const CourseInfo = ({ coursesList, authorsList }) => {
	const { courseId } = useParams();
	const [course] = useState(coursesList.find((c) => c.id === courseId));

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
								{getAuthorNames(authorsList, course.authors)}
							</div>
						</div>
						<div className='row'>
							<div>
								<b>Duration: </b>
								{convertDuration(course.duration)}
							</div>
						</div>
						<div className='row'>
							<div>
								<b>Created: </b>
								{formatDate(course.creationDate)}
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
