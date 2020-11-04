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

const StyledButton = styled.button`
	background-color: inherit;	
	border: 1px solid palevioletred;
	color: palevioletred;
	margin: 0px 30px;
	outline: none;	
	text-align: center;
	transition: 0.2s linear;
	width: 60px;

	:hover {
		color: papayawhip;
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const StyledRemove = styled(StyledButton)`
	background-color: inherit;
	border: 1px solid red;
	box-shadow: 0 5px 15px -5px #00000070;
	color: black;
	//height: 23px;
	margin: 10px 0px 5px 0px;

	:hover {
		background-color: red;
		color:  papayawhip;
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
			<StyledButton onClick={toggleVisibility} className="viewButton" > {visible ? "view" : "hide"} </StyledButton>

			<div style={hideByDefault} className='hidden-div' >
				{blog.url}
				<br />
         likes: {blog.likes}
				<StyledButton onClick={increaseLikesOf} > like </StyledButton> {/*should you declare the brackets here or leave it*/}
				<br />
				{blog.author}
				<br />
				<StyledRemove onClick={handleRemOf}> remove </StyledRemove>
			</div>

		</div>
	);
}


export default Blog;

//the idea is to have the button hide the info in the second div when a button is pressed
//the state will alway be set to true ie show
