import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';

const Header = (props) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Logo onClick={props.handleToggle}></Logo>
				<div className='d-flex justify-content-end'>
					<div className='navbar-brand'>Dave 🗿</div>
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
