import React from 'react';
import Button from '../../../../common/Button/Button';
import { format } from 'date-fns';
import * as Constants from '../../../../constants';

const convertDate = function (date) {
	return format(new Date(date), 'dd.MM.yyyy');
};

const convertDuration = function (minutes) {
	const date = new Date(0);
	date.setMinutes(minutes);
	const timeString = date.toISOString().substring(11, 16);
	const hours = Number(timeString.split(':')[0]) > 1 ? 'hours' : 'hour';

	return `${timeString} ${hours}`;
};

const authorNamesByIds = function (authorIds) {
	const authors = Constants.mockedAuthorsList.filter((author) =>
		authorIds.includes(author.id)
	);
	return authors.map((author) => author.name).join(', ');
};

const CourseCard = (props) => {
	return (
		<div className='card m-2'>
			<div className='d-flex'>
				<div className='col-md-9'>
					<div className='card-body'>
						<h5 className='card-title'>{props.courseData.title}</h5>
						<p className='card-text'>{props.courseData.description}</p>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='card-body'>
						<table className='mb-2'>
							<tbody>
								<tr>
									<td>
										<b>Author:</b>
									</td>
									<td>{authorNamesByIds(props.courseData.authors)}</td>
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
									<td>{convertDate(props.courseData.creationDate)}</td>
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
