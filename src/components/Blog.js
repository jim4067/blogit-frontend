import React, { useState } from 'react';

const Blog = ({ blog }) => {
	const [visible, setVisible] = useState(true);

	const mainStyles = {
		"border": ".3px solid",
		"margin": "3px",
		"padding": "4px"
	};

	const hideByDefault = { "display": visible ? "none" : "" };

	const toggleVisibility = () => {
		setVisible(!visible);
	}

	return (
		<div style={mainStyles} >
			{blog.title} {blog.author}
			<button onClick={toggleVisibility} >view</button>

			<div style={hideByDefault}>
				{blog.url}
				<br />
         likes: {blog.likes}
		 		<button> like </button>
				<br />
				{blog.author}
			</div>

		</div>
	);
}


export default Blog;

//the idea is to have the button hide the info in the second div when a button is pressed
//the state will alway be set to true ie show
