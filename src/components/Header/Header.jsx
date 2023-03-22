import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { userName, userExists, logoutUser } from 'helpers/userHelper';

const Header = () => {
	const navigate = useNavigate();

	const logout = () => {
		logoutUser();
		navigate('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<Link to='/'>
					<Logo />
				</Link>
				{userExists() && (
					<div className='d-flex justify-content-end'>
						<div className='navbar-brand'>{userName()} 🫡</div>
						<Button
							buttonText='Logout'
							className='btn btn-outline-secondary'
							onClick={logout}
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
