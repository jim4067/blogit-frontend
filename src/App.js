import React, { useState, useEffect } from 'react';
import DisplayBlogs from './components/DisplayBlogs';
import LoginForm from './components/LoginForm';
import blogService from './services/blogs';
import loginService from './services/login';
import './App.css';
import Blog from './components/Blog';

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

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			blogService.setToken(user.token);
		}
	}, []);

	const handleLogin = async (event) => {
		event.preventDefault();
		console.log("logging in with", username, password);

		try {
			const user = await loginService.login(
				{ username, password }
			);

			window.localStorage.setItem(
				'loggedBlogAppUser', JSON.stringify(user)
			);

			setUsername("");
			setPassword("");
			setUser(user);
		} catch (exception) {
			console.log("the exception ", exception);
		}
	}

	//event hanlder to be fired when user logs out
	const handleLogout = async () => {
		try {
			window.localStorage.clear();
			window.location.reload();
		} catch (exception) {
			console.log("the logout exception is...", exception);
		}
	}

	return (
		<div>
			{user === ""
				?
				<LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername}
					password={password} setPassword={setPassword} />
				:
				<DisplayBlogs blogs={blogs} user={user} handleLogout={handleLogout} />
			}

		</div>
	);
}

export default App;