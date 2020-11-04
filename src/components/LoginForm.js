import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/LoginForm.css';

//component to display login
const LoginForm = ({ handleLogin, username, setUsername, password, setPassword }) => {
	const history = useHistory();
	history.push('/');

	return (
		<div className="form-container" >
			<form className='login-form' onSubmit={handleLogin}>
				<h2>LOGIN</h2>
				<div>
					<input placeholder="Username" id="username" type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} />
				</div>
				<div>
					<input placeholder="Password" id="password" type='password' name='password' value={password} onChange={({ target }) => setPassword(target.value)} />
				</div>
				<button type='submit' id="login-button">login</button>
			</form>
		</div>
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