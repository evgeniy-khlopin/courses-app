import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';

const Header = ({ handleToggle }) => (
	<nav className='navbar navbar-expand-lg bg-body-tertiary'>
		<div className='container-fluid'>
			<Logo onClick={() => handleToggle(true)} />
			<div className='d-flex justify-content-end'>
				<div className='navbar-brand'>Dave 🫡</div>
				<Button buttonText='Logout' className='btn btn-outline-secondary' />
			</div>
		</div>
	</nav>
);

export default Header;
