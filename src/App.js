import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
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
				{username, password}
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

			<form onSubmit={handleLogin}>
				<div>
					username <input type='text' name='username' value={username} onChange={({ target }) => setUsername(target.value)} />
				</div>
				<div>
					password <input type='password' name='password' value={password} onChange={({ target }) => setPassword(target.value)} />
				</div>
				<button type='submit'>login</button>
			</form>

			<h2>blogs</h2>
			{blogs.map(blog =>
				<Blog key={blog.id} blog={blog} />
			)}

		</div>
	)
}

export default App