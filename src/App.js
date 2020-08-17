import React, { useState, useEffect } from 'react';
import DisplayBlogs from './components/DisplayBlogs';
import LoginForm from './components/LoginForm';
import blogService from './services/blogs';
import loginService from './services/login';
import './App.css';

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [newBlog, setNewBlog] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	useEffect(() => {
		blogService
			.getAll()
			.then(blogs =>
				setBlogs(blogs)
			)
	}, []);

	const handleLogin = async (event) => {
		event.preventDefault();
		console.log("logging in with", username, password);

		try {
			const user = await loginService.login(
				{ username, password }
			);

			setUsername("");
			setPassword("");
			setUser(user);
		} catch (exception) {
			console.log("the exception ", exception);
		}
	}

	return (
		<div>
			{user === ""
				?
				<LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername}
					password={password} setPassword={setPassword} />
				:
				<DisplayBlogs blogs={blogs} />
			}

		</div>
	);
}

export default App;