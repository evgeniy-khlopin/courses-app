import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/user/thunk';
import { getUserSelector } from 'store/user/selectors';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(getUserSelector);

	const logoutHandler = async () => {
		await dispatch(logout());
		navigate('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<Link to='/'>
					<Logo />
				</Link>
				{user.isAuth && (
					<div className='d-flex justify-content-end'>
						<div className='navbar-brand'>{user.name} 🫡</div>
						<Button
							buttonText='Logout'
							className='btn btn-outline-secondary'
							onClick={logoutHandler}
						/>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
