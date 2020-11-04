import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import DisplayBlogs from './components/DisplayBlogs';
import DisplayUsers from './components/DisplayUsers';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import SingleBlog from './components/SingleBlog';
import SingleUser from './components/SingleUser';
import { showNotification } from './reducers/notificationReducer'; //action creator for notifications
import { initializeState } from './reducers/blogReducer';
import { loggedUser } from './reducers/userReducer';
import { allUsers } from './reducers/usersReducer';
import blogService from './services/blogs';
import loginService from './services/login';
import './styles/App.css';

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	//the states for the login form
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	//initializing the state for the blogs
	useEffect(() => {
		dispatch(initializeState());
	}, [dispatch]);

	//getting all users
	useEffect(() => {
		dispatch(allUsers());
	}, []);


	//the useEffect function below ensures that we do not have to log back in every time we refresh the page
	//it sets the value of the user in the redux user reducer
	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			dispatch(loggedUser(user));
			blogService.setToken(user.token);
		}
	}, [dispatch]); //incase of any problem with useEffect here remove the dispatch

	//the event hanlder for logging in
	const handleLogin = async (event) => {
		event.preventDefault();

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
			//before dispatching a notification make sure to add it in the Notification component
			if (exception.message.includes("Request failed with status code 401")) {
				dispatch(showNotification("wrong username or password", 5));
			}
			if (exception.message.includes("Request failed with status code 500")) {
				dispatch(showNotification("could not connect to the server", 8));
			}
		}
	}

	//event hanlder to be fired when user logs out
	const handleLogout = async () => {

		try {
			window.localStorage.clear();
			window.location.reload();
		} catch (exception) {
			console.log("How hard is it pressing a big red button", exception);
		}
	}

	return (
		<div className='app-container'>

			<Notification />

			{/* the navigation for the app. Must make sure that the user is not null. Something that react really hates */}
			{
				user !== null
					?
					<Navigation user={user} handleLogout={handleLogout} />
					:
					null
			}

			{/* it time to get rid of conditional rendering and use react router */}
			{user === null
				?
				<LoginForm handleLogin={handleLogin}
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword} />
				:
				// easter egg saying -> so your are developer too.
				<Switch>
					<Route path='/users/:id'>
						<SingleUser />
					</Route>
					<Route path='/users'>
						<DisplayUsers />
					</Route>
					<Route path='/blogs/:id'>
						<SingleBlog />
					</Route>
					<Route path='/'>
						<DisplayBlogs >
							{/* <Togglable buttonLabel={'new blog'}> commented because styling this is a nightmare
								<BlogForm />
							</Togglable> */}
							<BlogForm />
						</DisplayBlogs>
					</Route>
				</Switch>
			}

		</div>
	);
}

export default App;
