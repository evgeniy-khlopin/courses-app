import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';

const Header = (props) => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<Logo onClick={() => props.handleToggle(true)}></Logo>
				<div className='d-flex justify-content-end'>
					<div className='navbar-brand'>Dave 🫡</div>
					<Button
						buttonText='Logout'
						className='btn btn-outline-secondary'
					></Button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
