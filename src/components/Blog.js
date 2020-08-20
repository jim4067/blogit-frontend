import React, { useState } from 'react';

const Blog = ({ blog , increaseLikesOf, handleRemOf}) => {
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
		 		<button onClick={increaseLikesOf} > like </button> {/*should you declare the brackets here or leave it*/}
				<br />
				{blog.author}
				<br />
				<button onClick={handleRemOf}> remove </button>
			</div>

		</div>
	);
}


export default Blog;

//the idea is to have the button hide the info in the second div when a button is pressed
//the state will alway be set to true ie show
