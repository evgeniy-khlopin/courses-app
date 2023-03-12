import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Registration = (props) => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (event) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_BASE_URL}/register`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			}
		);
		const json = await response.json();
		if (json.successful) {
			navigate('/login');
		} else {
			alert('Please check your data');
		}
	};

	useEffect(() => {
		const listener = (event) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				event.preventDefault();
				handleSubmit();
			}
		};
		document.addEventListener('keydown', listener);
		return () => {
			document.removeEventListener('keydown', listener);
		};
	});
	return (
		<div className='card col-md-3 d-flex mx-auto mt-5'>
			<div className='card-header'>Registration</div>
			<div className='card-body'>
				<form>
					<div className='mb-3'>
						<Input
							name='name'
							labelText='Name'
							placeholderText='Enter name'
							onChange={handleInputChange}
						></Input>
					</div>
					<div className='mb-3'>
						<Input
							name='email'
							labelText='Email'
							placeholderText='Enter email'
							type='email'
							onChange={handleInputChange}
						></Input>
					</div>
					<div className='mb-3'>
						<Input
							name='password'
							labelText='Password'
							placeholderText='Enter password'
							type='password'
							onChange={handleInputChange}
						></Input>
					</div>
				</form>
				<div className='d-grid col-6 mx-auto'>
					<Button buttonText='Sign up'></Button>
				</div>
				<p className='small mt-2 text-center'>
					Already have an account? <Link to='/login'>Login</Link>
				</p>
			</div>
		</div>
	);
};

// Registration.propTypes = {};

export default Registration;
