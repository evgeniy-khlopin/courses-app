import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ userExists, redirectPath = '/login', children }) => {
	if (!userExists) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};

export default PrivateRoute;
