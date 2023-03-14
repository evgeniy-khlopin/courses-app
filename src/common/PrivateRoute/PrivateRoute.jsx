import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ userExists, redirectPath = '/login', children }) => {
	if (!userExists) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};

PrivateRoute.propTypes = {
	userExists: PropTypes.bool,
	redirectPath: PropTypes.string,
	children: PropTypes.element,
};

export default PrivateRoute;
