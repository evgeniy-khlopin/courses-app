import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { convertDuration } from 'helpers/getCourseDuration';
import { format } from 'date-fns';

const CreateCourse = (props) => {
	const [availableAuthors, setAvailableAuthors] = useState(props.authorsList);
	const [allAuthors, setAllAuthors] = useState(props.authorsList);
	const [authorName, setAuthorName] = useState('');
	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});

	const handleAddAuthor = function (author) {
		setAvailableAuthors(availableAuthors.filter((a) => a !== author));
		setAllAuthors([...allAuthors, author]);
		setCourse((prevState) => ({
			...prevState,
			authors: [...prevState.authors, author.id],
		}));
	};

	const handleRemoveAuthor = function (author) {
		setAvailableAuthors((prevState) => [...prevState, author]);
		setCourse((prevState) => ({
			...prevState,
			authors: [...prevState.authors.filter((a) => a !== author.id)],
		}));
	};

	const validateCourse = function (updatedCourse) {
		const entries = Object.entries(updatedCourse).filter(([k, v], i) => !v);
		let error = '';
		if (entries.length !== 0) {
			error = 'Please fill in all fields';
		} else if (updatedCourse.authors.length === 0) {
			error = 'At least one author should be selected';
		} else if (updatedCourse.title.length < 2) {
			error = 'Title must be at least 2 characters';
		} else if (updatedCourse.description.length < 2) {
			error = 'Description must be at least 2 characters';
		}

		if (error.length > 0) {
			alert(error);
			return false;
		}
		return true;
	};

	const handleCourseSubmit = function () {
		const updatedCourse = course;
		updatedCourse.id = crypto.randomUUID();
		updatedCourse.creationDate = format(new Date(), 'dd/MM/yyyy');
		if (validateCourse(updatedCourse)) {
			props.updateCoursesList((prevState) => [...prevState, updatedCourse]);
		}
	};

	const handleCourseInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		setCourse({ ...course, [name]: value });
	};

	const handleAuthorInputChange = function (event) {
		setAuthorName(event.target.value);
	};

	const handleAuthorSubmit = function () {
		if (authorName.length > 2) {
			const newAuthor = { id: crypto.randomUUID(), name: authorName };
			setAvailableAuthors((prev) => [...prev, newAuthor]);
			setAuthorName('');
		} else {
			alert('Author name should be at least 2 characters');
		}
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='d-flex align-items-end mb-2'>
					<div className='me-auto'>
						<Input
							labelText='Title'
							placeholderText='Enter title...'
							name='title'
							onChange={handleCourseInputChange}
						></Input>
					</div>
					<div>
						<Button
							buttonText='Create Course'
							onClick={handleCourseSubmit}
						></Button>
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
					></textarea>
				</div>

				<div className='row d-flex justify-content-around mb-4'>
					<div className='d-flex flex-column col-md-4'>
						<h4 className='d-flex justify-content-center'>Add author</h4>
						<Input
							labelText='Author name'
							placeholderText='Enter author name...'
							onChange={handleAuthorInputChange}
							value={authorName}
						></Input>
						<div className='d-flex justify-content-center mt-2'>
							<Button
								buttonText='Create author'
								onClick={handleAuthorSubmit}
							></Button>
						</div>
					</div>

					<div className='d-flex flex-column col-md-4'>
						<h4 className='d-flex justify-content-center'>Authors</h4>
						{availableAuthors.length > 0 ? (
							availableAuthors.map((author, index) => (
								<div className='mb-2' key={index}>
									<AuthorItem
										author={author}
										handler={() => handleAddAuthor(author)}
									></AuthorItem>
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
						></Input>
						<h4 className='mt-2'>
							Duration: {convertDuration(course.duration)}
						</h4>
					</div>

					<div className='d-flex flex-column col-md-4'>
						<h4 className='d-flex justify-content-center'>Course authors</h4>
						{course.authors.length > 0 ? (
							course.authors.map((authorId, index) => {
								const author = allAuthors.find(
									(author) => author.id === authorId
								);
								return (
									<div className='mb-2' key={index}>
										<AuthorItem
											author={author}
											handler={() => handleRemoveAuthor(author)}
											buttonText='Delete author'
											buttonClassName='btn btn-danger'
										></AuthorItem>
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
		</>
	);
};

export default CreateCourse;
