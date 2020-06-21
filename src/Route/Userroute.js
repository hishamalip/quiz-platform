import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoginu } from '../utils/Token'

const PrivateRoute = ({ component: Component, handleToast: handleToast, ...rest }) => {
	return (

		// Show the component only when the user is logged in
		// Otherwise, redirect the user to /signin page
		<Route {...rest} render={props => (
			isLoginu() ?
				<Component {...props} handleToast={handleToast} />
				: <Redirect to="/" />
		)} />
	);
};

export default PrivateRoute;