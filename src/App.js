import React, { useState, useEffect } from 'react';
import DisplayBlogs from './components/DisplayBlogs';
import LoginForm from './components/LoginForm';
import blogService from './services/blogs';
import loginService from './services/login';
import './App.css';

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	//the states for value when creating a new blog
	const [newTitle, setNewTitle] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	const [newUrl, setNewUrl] = useState("");

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

	//the event handler for adding a new blog
	const createBlog = async (event) => {
		event.preventDefault();

		try {
			const blogObject = {
				title: newTitle,
				author: newAuthor,
				url: newUrl
			}

			const response = await blogService.create(blogObject);
			console.log("the response is ...." , response);

			setBlogs(blogs.concat(response.data));

			setNewTitle("");
			setNewAuthor("");
			setNewUrl("");
			
		} catch (exception) {
			console.log("the eception for creating a new blog", exception);
		}
	}

	//the event hanlder for logging in
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
				<DisplayBlogs blogs={blogs} user={user} handleLogout={handleLogout}
					createBlog={createBlog}
					handleTitleChange={({ target }) => setNewTitle(target.value)}
					handleAuthorChage={({ target }) => setNewAuthor(target.value)}
					handleUrlChange={({ target }) => setNewUrl(target.value)} />
			}

		</div>
	);
}

export default App;