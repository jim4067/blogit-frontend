import React from 'react';
import propTypes from 'prop-types';

//component to display login
const LoginForm = ({ handleLogin, username, setUsername, password, setPassword }) => {

	return (
		<form onSubmit={handleLogin}>
			<div>
				username <input id="username" type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} />
			</div>
			<div>
				password <input id="password" type='password' name='password' value={password} onChange={({ target }) => setPassword(target.value)} />
			</div>
			<button type='submit' id="login-button">login</button>
		</form>
	);
}

LoginForm.propTypes = {
	handleLogin: propTypes.func.isRequired,
	username: propTypes.string.isRequired,
	setUsername: propTypes.func.isRequired,
	password: propTypes.string.isRequired,
	setPassword: propTypes.func.isRequired
}

export default LoginForm;