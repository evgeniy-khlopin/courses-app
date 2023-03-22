import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userExists } from 'helpers/userHelper';

const PrivateRoute = ({ redirectPath = '/login', children }) => {
	if (!userExists()) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};

PrivateRoute.propTypes = {
	redirectPath: PropTypes.string,
	children: PropTypes.element,
};

export default PrivateRoute;
