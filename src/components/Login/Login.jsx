import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from 'store/user/reducer';
import { getUserSelector } from 'store/user/selectors';
import { userExists } from 'helpers/userHelper';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const user = useSelector(getUserSelector);
	const [showError, setShowError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(logout());
		dispatch(login(loginData));
	};

	useEffect(() => {
		if (userExists()) navigate('/courses');
		if (!user.loginSuccessful) setShowError(true);
	}, [user, navigate, dispatch]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setLoginData({ ...loginData, [name]: value });
	};

	const handleLinkClick = () => {
		dispatch(logout());
	};

	return (
		<div className='col-md-3  mx-auto mt-5'>
			{showError && (
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
							<Button buttonText='Sign in' type='submit' />
						</div>
					</form>
					<p className='small mt-2 text-center'>
						Don't have an account yet? Sign up{' '}
						<Link to='/registration' onClick={handleLinkClick}>
							here
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
