import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoginu, isLogina } from '../utils/Token';

const PublicRoute = ({ component: Component, restricted, handleToast: handleToast, ...rest }) => {
	return (
		// restricted = false meaning public route
		// restricted = true meaning restricted route
		<Route {...rest} render={props => (
			isLoginu() && restricted ?
				<Redirect to="/feed" />
				: isLogina() && restricted ? <Redirect to="/Adminhome" /> : <Component {...props} handleToast={handleToast} />
		)} />
	);
};

export default PublicRoute;