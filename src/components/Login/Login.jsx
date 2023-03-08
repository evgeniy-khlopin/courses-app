import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Login = (props) => {
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setLoginData({ ...loginData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch(
			`${process.env.REACT_APP_API_BASE_URL}/login`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginData),
			}
		);
		const json = await response.json();
		if (json.successful) {
			localStorage.setItem('bearerToken', json.result);
			localStorage.setItem('userName', json.user.name);
			navigate('/');
		} else {
			alert('Wrong email or password');
		}
	};

	return (
		<div className='card col-md-3 d-flex mx-auto'>
			<div className='card-header'>Login</div>
			<div className='card-body'>
				<form>
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
				<Button buttonText='Sign up' onClick={handleSubmit}></Button>
				<p className='small mt-2'>
					Don't have an account yet? Sign up{' '}
					<Link to='/registration'>here</Link>
				</p>
			</div>
		</div>
	);
};

// Login.propTypes = {};

export default Login;
