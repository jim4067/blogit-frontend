import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import DisplayBlogs from './components/DisplayBlogs';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';
import blogService from './services/blogs';
import loginService from './services/login';
import './App.css';

const App = () => {
	const [blogs, setBlogs] = useState([]);

	//the states for the login form
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

	//the state for nofitification
	const [message, setMessage] = useState(null);

	//sorting the blogs
	const sortBlogs = (blogs) => {
		return blogs.sort((a, b) => b.likes - a.likes)
	}

	useEffect(() => {
		blogService
			.getAll()
			.then(blogs =>
				setBlogs(sortBlogs(blogs))
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
	const addBlog = async (blogObject) => {

		try {

			const response = await blogService.create(blogObject);
			console.log("the response is ....", response);

			//the notification for when a new blog is added
			setMessage(`a new blog -> ${blogObject.title} by ${blogObject.author} added`);
			setTimeout(() => {
				setMessage(null);
			}, 5000);

			//concatenate the created blog with the array of the blogs
			setBlogs(blogs.concat(response.data));

			console.log("after adding anew blog all blogs are....", blogs)

		} catch (exception) {
			console.log("the eception for creating a new blog", exception);
		}
	}

	//the code for updating the number of likes
	const increaseLikesOf = async (id) => {
		try {
			const blog = blogs.find(b => b.id === id);
			const changedBlog = { ...blog, likes: blog.likes + 1 };

			const response = await blogService.update(id, changedBlog);
			//setBlogs(response.data); Do not use this. this results in an error
			setBlogs(blogs.map(blog => blog.id !== id ? blog : response.data));
		} catch (exception) {
			console.log("the exception was caught in time")
		}
	}

	//the code for removal of a blog
	const handleRemOf = async (id) => {
		try {
			const response = await blogService.remove(id)
			setBlogs(blogs.map(blog => blog.id !== id ? blog : response.data));
		} catch (exception) {
			console.log("the exception happened at the removal of blog function", exception);
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
			setMessage("wrong username or password");
			setTimeout(() => {
				setMessage(null);
			}, 5000);

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

			<Notification message={message} />

			{user === ""
				?
				<Togglable buttonLabel="log in">
					<LoginForm handleLogin={handleLogin}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword} />
				</Togglable>
				:
				<DisplayBlogs blogs={blogs} user={user} handleLogout={handleLogout}>

					<Togglable buttonLabel="new blog">
						<BlogForm createBlog={addBlog} />
					</Togglable>

					{blogs.map((blog) =>
						<Blog key={blog.id} blog={blog} increaseLikesOf={() => increaseLikesOf(blog.id)} />
					)}
				</DisplayBlogs>
			}

		</div>
	);
}

export default App;