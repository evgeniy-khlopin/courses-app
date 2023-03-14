import React from 'react';
import Button from 'common/Button/Button';
import './CourseCard.scss';
import { convertDuration } from 'helpers/getCourseDuration';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { getAuthorNames } from 'helpers/getAuthorNames';
import PropTypes from 'prop-types';

const CourseCard = ({ courseData, authorsList }) => (
	<div className='card'>
		<div className='d-flex'>
			<div className='col-md-9 bg-body-tertiary'>
				<div className='card-body'>
					<h5 className='card-title'>{courseData.title}</h5>
					<p className='card-text'>{courseData.description}</p>
				</div>
			</div>
			<div className='vr' />
			<div className='col-md-3'>
				<div className='card-body'>
					<table className='mb-2'>
						<tbody>
							<tr>
								<td>
									<b>Author:</b>
								</td>
								<td className='overflow'>
									{getAuthorNames(authorsList, courseData.authors)}
								</td>
							</tr>
							<tr>
								<td>
									<b>Duration:</b>
								</td>
								<td>{convertDuration(courseData.duration)}</td>
							</tr>
							<tr>
								<td>
									<b>Created:</b>
								</td>
								<td>
									{format(new Date(courseData.creationDate), 'dd.MM.yyyy')}
								</td>
							</tr>
						</tbody>
					</table>

					<div className='d-flex justify-content-center'>
						<Link to={`/courses/${courseData.id}`}>
							<Button buttonText='Show Course' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

CourseCard.propTypes = {
	courseData: PropTypes.object.isRequired,
	authorsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CourseCard;
