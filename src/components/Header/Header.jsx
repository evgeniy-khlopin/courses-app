import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className='navbar navbar-expand-lg bg-body-tertiary'>
		<div className='container-fluid'>
			<Link to='/'>
				<Logo />
			</Link>
			<div className='d-flex justify-content-end'>
				<div className='navbar-brand'>{localStorage.getItem('userName')} 🫡</div>
				<Button buttonText='Logout' className='btn btn-outline-secondary' />
			</div>
		</div>
	</nav>
);

export default Header;
