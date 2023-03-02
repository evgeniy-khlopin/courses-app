import React from 'react';
import Button from 'common/Button/Button';
import './CourseCard.scss';
import { convertDuration } from 'helpers/getCourseDuration';
import { format } from 'date-fns';

const authorNamesByIds = function (authorsList, authorIds) {
	const authors = authorsList.filter((author) => authorIds.includes(author.id));
	return authors.map((author) => author.name).join(', ');
};

const CourseCard = (props) => {
	return (
		<div className='card'>
			<div className='d-flex'>
				<div className='col-md-9 bg-body-tertiary'>
					<div className='card-body'>
						<h5 className='card-title'>{props.courseData.title}</h5>
						<p className='card-text'>{props.courseData.description}</p>
					</div>
				</div>
				<div className='vr'></div>
				<div className='col-md-3'>
					<div className='card-body'>
						<table className='mb-2'>
							<tbody>
								<tr>
									<td>
										<b>Author:</b>
									</td>
									<td className='overflow'>
										{authorNamesByIds(
											props.authorsList,
											props.courseData.authors
										)}
									</td>
								</tr>
								<tr>
									<td>
										<b>Duration:</b>
									</td>
									<td>{convertDuration(props.courseData.duration)}</td>
								</tr>
								<tr>
									<td>
										<b>Created:</b>
									</td>
									<td>
										{format(
											new Date(props.courseData.creationDate),
											'dd.MM.yyyy'
										)}
									</td>
								</tr>
							</tbody>
						</table>

						<div className='d-flex justify-content-center'>
							<Button buttonText='Show Course'></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
