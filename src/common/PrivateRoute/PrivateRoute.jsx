import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAdmin, userExists } from 'helpers/userHelper';

const PrivateRoute = ({
	redirectPath = '/login',
	children,
	adminOnly = false,
	user,
}) => {
	const auth = userExists() || (adminOnly && !isAdmin(user));

	return auth ? children : <Navigate to={redirectPath} replace />;
};

PrivateRoute.propTypes = {
	redirectPath: PropTypes.string,
	children: PropTypes.element,
	adminOnly: PropTypes.bool,
	user: PropTypes.object,
};

export default PrivateRoute;
