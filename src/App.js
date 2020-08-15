import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [newBlog, setNewBlog] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setuser] = useState("");

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
			
		} catch (exception) {
			
		}
	}

	return (
		<div>
			
			<form>
				
			</form>

			<h2>blogs</h2>
			{blogs.map(blog =>
				<Blog key={blog.id} blog={blog} />
			)}

		</div>
	)
}

export default App