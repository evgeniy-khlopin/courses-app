import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = (props) => {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<a href='/'>
					<Logo></Logo>
				</a>
				<div class='d-flex justify-content-end'>
					<div class='navbar-brand'>Dave</div>
					<Button buttonText='Logout'></Button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
