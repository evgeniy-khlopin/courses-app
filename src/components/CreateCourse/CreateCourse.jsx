import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { convertDuration } from 'helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createAuthor } from 'store/authors/reducer';
import { createCourse } from 'store/courses/reducer';

const CreateCourse = ({ authorsList }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [authorName, setAuthorName] = useState('');
	const [course, setCourse] = useState({
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});

	const availableAuthors = () => {
		return authorsList.filter((author) => !course.authors.includes(author.id));
	};

	const handleAddAuthor = (author) => {
		setCourse((prevState) => ({
			...prevState,
			authors: [...prevState.authors, author.id],
		}));
	};

	const handleRemoveAuthor = (author) => {
		setCourse((prevState) => ({
			...prevState,
			authors: prevState.authors.filter((a) => a !== author.id),
		}));
	};

	const validateCourse = () => {
		const entries = Object.entries(course).filter(([k, v], i) => !v);
		let error = '';
		if (entries.length !== 0) {
			error = 'Please fill in all fields';
		} else if (course.authors.length === 0) {
			error = 'At least one author should be selected';
		} else if (course.title.length < 2) {
			error = 'Title must be at least 2 characters';
		} else if (course.description.length < 2) {
			error = 'Description must be at least 2 characters';
		}

		if (error.length > 0) {
			alert(error);
			return false;
		}
		return true;
	};

	const handleCourseSubmit = () => {
		if (validateCourse(course)) {
			dispatch(createCourse(course));
			navigate('/courses');
		}
	};

	const handleCourseInputChange = (event) => {
		let { name, value } = event.target;

		if (name === 'duration') value = Number(value);
		setCourse({ ...course, [name]: value });
	};

	const handleAuthorInputChange = (event) => {
		setAuthorName(event.target.value);
	};

	const handleAuthorSubmit = () => {
		if (authorName.length > 2) {
			dispatch(createAuthor({ name: authorName }));
			setAuthorName('');
		} else {
			alert('Author name should be at least 2 characters');
		}
	};

	return (
		<div className='col-md-8 mx-auto'>
			<div className='d-flex align-items-end mb-2'>
				<div className='me-auto'>
					<Input
						labelText='Title'
						placeholderText='Enter title...'
						name='title'
						onChange={handleCourseInputChange}
					/>
				</div>
				<div>
					<Button buttonText='Create Course' onClick={handleCourseSubmit} />
				</div>
			</div>

			<div className='mb-5'>
				<label className='form-label'>Description</label>
				<textarea
					className='form-control'
					id='description'
					rows='3'
					placeholder='Enter description'
					name='description'
					onChange={handleCourseInputChange}
				/>
			</div>

			<div className='row d-flex justify-content-around mb-4'>
				<div className='d-flex flex-column col-md-4'>
					<h4 className='d-flex justify-content-center'>Add author</h4>
					<Input
						labelText='Author name'
						placeholderText='Enter author name...'
						onChange={handleAuthorInputChange}
						value={authorName}
					/>
					<div className='d-flex justify-content-center mt-2'>
						<Button buttonText='Create author' onClick={handleAuthorSubmit} />
					</div>
				</div>

				<div className='d-flex flex-column col-md-4'>
					<h4 className='d-flex justify-content-center'>Authors</h4>
					{availableAuthors().length > 0 ? (
						availableAuthors().map((author, index) => (
							<div className='mb-2' key={index}>
								<AuthorItem
									author={author}
									handleClick={() => handleAddAuthor(author)}
								/>
							</div>
						))
					) : (
						<p className='d-flex justify-content-center text-muted'>
							Author list is empty
						</p>
					)}
				</div>
			</div>

			<div className='row d-flex justify-content-around'>
				<div className='d-flex flex-column col-md-4'>
					<h4 className='d-flex justify-content-center'>Duration</h4>
					<Input
						labelText='Duration'
						placeholderText='Enter duration in minutes...'
						onChange={handleCourseInputChange}
						type='number'
						min='1'
						max='1439'
						name='duration'
					/>
					<h4 className='mt-2'>Duration: {convertDuration(course.duration)}</h4>
				</div>

				<div className='d-flex flex-column col-md-4'>
					<h4 className='d-flex justify-content-center'>Course authors</h4>
					{course.authors.length > 0 ? (
						course.authors.map((authorId, index) => {
							const author = authorsList.find(
								(author) => author.id === authorId
							);
							return (
								<div className='mb-2' key={index}>
									<AuthorItem
										author={author}
										handleClick={() => handleRemoveAuthor(author)}
										buttonText='Delete author'
										buttonClassName='btn btn-danger'
									/>
								</div>
							);
						})
					) : (
						<p className='d-flex justify-content-center text-muted'>
							Author list is empty
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

CreateCourse.propTypes = {
	authorsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CreateCourse;
