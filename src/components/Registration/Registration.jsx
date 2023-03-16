import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from 'helpers/userHelper';

const Registration = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);
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
		event.preventDefault();
		const response = await registerUser(userData, () => navigate('/login'));
		setErrors(response.errors);
	};

	return (
		<div className='col-md-3 mx-auto mt-5'>
			{errors.map((error, index) => (
				<div className='alert alert-danger mb-2' key={index}>
					{error}
				</div>
			))}

			<div className='card d-flex'>
				<div className='card-header'>Registration</div>
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<Input
								name='name'
								labelText='Name'
								placeholderText='Enter name'
								onChange={handleInputChange}
							/>
						</div>
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
							<Button buttonText='Sign up' type='submit'></Button>
						</div>
					</form>
					<p className='small mt-2 text-center'>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Registration;
