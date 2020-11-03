import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNameLink = styled(Link)`
    color: black;
	text-decoration: none;
	transition: 0.2s linear;

	:hover {
        cursor: pointer;
        color: palevioletred;
	}
`;


const Blog = ({ blog, increaseLikesOf, handleRemOf }) => {
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
			<StyledNameLink to={`/blogs/${blog.id}`} >{blog.title} {blog.author}</StyledNameLink>
			<button onClick={toggleVisibility} className="viewButton" > {visible ? "view" : "hide"} </button>

			<div style={hideByDefault} className='hidden-div' >
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
