import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from 'helpers/userHelper';

const Login = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);
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
		const response = await loginUser(loginData, () => {
			navigate('/courses');
		});
		setErrors(response.errors);
	};

	return (
		<div className='col-md-3  mx-auto mt-5'>
			{errors.length > 0 && (
				<div className='alert alert-danger mb-2'>Wrong email or password</div>
			)}
			<div className='card d-flex'>
				<div className='card-header'>Login</div>
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<Input
								name='email'
								labelText='Email'
								placeholderText='Enter email'
								type='email'
								onChange={handleInputChange}
							/>
						</div>
						<div className='mb-3'>
							<Input
								name='password'
								labelText='Password'
								placeholderText='Enter password'
								type='password'
								onChange={handleInputChange}
							/>
						</div>
						<div className='d-grid col-6 mx-auto'>
							<Button buttonText='Sign in' type='submit'></Button>
						</div>
					</form>
					<p className='small mt-2 text-center'>
						Don't have an account yet? Sign up{' '}
						<Link to='/registration'>here</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
