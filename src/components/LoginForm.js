import React from 'react';

//component to display login
	const LoginForm = ({handleLogin, username, setUsername, password, setPassword}) => {

		return (
			<form onSubmit={handleLogin}>
				<div>
					username <input type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} />
				</div>
				<div>
					password <input type='password' name='password' value={password} onChange={({ target }) => setPassword(target.value)} />
				</div>
				<button type='submit'>login</button>
			</form>
		);
	}

    export default LoginForm;