import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogForm from './components/BlogForm';
import DisplayBlogs from './components/DisplayBlogs';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';
import { showNotification } from './reducers/notificationReducer'; //action creator for notifications
import { initializeState } from './reducers/blogReducer';
import { loggedUser } from './reducers/userReducer';
import blogService from './services/blogs';
import loginService from './services/login';
import './styles/App.css';

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	//const [blogs, setBlogs] = useState([]);

	//the states for the login form
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	//const [user, setUser] = useState("");

	//the state for nofitification
	//const [message, setMessage] = useState(null);// for notifications dispatch the actions for the different actions

	//sorting the blogs
	// const sortBlogs = (blogs) => {
	// 	return blogs.sort((a, b) => b.likes - a.likes)
	// }

	useEffect(() => {
		dispatch(initializeState());
	}, [dispatch]);

	//the useEffect function below ensures that we do not have to log back in every time we refresh the page
	//it sets the value of the user in the redux user reducer
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			dispatch(loggedUser(user));
			blogService.setToken(user.token);
		}
	}, []);


	// //the event handler for adding a new blog
	// const addBlog = async (blogObject) => {

	// 	try {

	// 		const response = await blogService.create(blogObject);
	// 		console.log("the response is ....", response);

	// 		//the new way for notifications from the redux store
	// 		dispatch(showNotification(`a new blog -> ${blogObject.title} by ${blogObject.author} added`, 5))

	// 		//concatenate the created blog with the array of the blogs
	// 		//setBlogs(blogs.concat(response.data));

	// 	} catch (exception) {
	// 		console.log("the eception for creating a new blog", exception);
	// 	}
	// }


	/*uncomment this if everything breaks
//the code for updating the number of likes
const increaseLikesOf = async (id) => {
	try {
		const blog = blogs.find(b => b.id === id);
		const changedBlog = { ...blog, likes: blog.likes + 1 };

		const response = await blogService.update(id, changedBlog);
		//setBlogs(response.data); Do not use this. this results in an error
		//show a notification when you vote for a blog. E.G `you liked the blog {blog.content} by {blog.author}`
		setBlogs(blogs.map(blog => blog.id !== id ? blog : response.data));
	} catch (exception) {
		console.log("the exception was caught in time", exception)
	}
}

//the code for removal of a blog


const handleRemOf = async (id) => {
	try {
		const blog = blogs.find(b => b.id === id);

		if (window.confirm(`remove blog ${blog.title} by ${blog.author}`)) { //if true then dispatch the action for removing a blog
			await blogService.remove(id);
			setBlogs(sortBlogs(blogs.filter(b => b.id !== id)));
		}

	} catch (exception) {
		console.log("the exception happened at the removal of blog function", exception);
	}
}
*/

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

			dispatch(loggedUser(user));

		} catch (exception) {
			/*setMessage("wrong username or password");
			setTimeout(() => {
				setMessage(null);
			}, 5000);
			*/
			dispatch(showNotification("wrong username or password", 5));

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
		<div className='app-container'>

			<Notification />

			{user === null
				?
				<Togglable buttonLabel="log in">
					<LoginForm handleLogin={handleLogin}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword} />
				</Togglable>
				:
				// <DisplayBlogs blogs={blogs} user={user} handleLogout={handleLogout}>

				// 	<Togglable buttonLabel="new blog">
				// 		<BlogForm createBlog={addBlog} />
				// 	</Togglable>

				// 	{blogs.map((blog) =>
				// 		<Blog key={blog.id} blog={blog}
				// 			increaseLikesOf={() => increaseLikesOf(blog.id)}
				// 			handleRemOf={() => handleRemOf(blog.id)}

				// 		/>
				// 	) }
				// </DisplayBlogs>
				<DisplayBlogs user={user} handleLogout={handleLogout}>

					<Togglable buttonLabel="new blog">
						<BlogForm  /> {/*createBlog={addBlog} */}
					</Togglable>

				</DisplayBlogs>
			}

		</div>
	);
}

export default App;


/*
		 *the old notification for when a new blog is added

		setMessage(`a new blog -> ${blogObject.title} by ${blogObject.author} added`);
		setTimeout(() => {
			setMessage(null);
		}, 5000);
*/