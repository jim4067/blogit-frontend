import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

//the action creator for the reducer
import { newBlog } from "../reducers/blogReducer";
import { showNotification } from "../reducers/notificationReducer";

//the styles
const Wrapper = styled.div`
	text-align: center;
`;
const FormWrapper = styled.div`
	display: ${(props) => (props.invisible ? "none" : "")};
`;

const Input = styled.input`
	background: papayawhip;
	border: none;
	border-radius: 3px;
	color: palevioletred;
	margin: 0.5em;
	outline: none;
	padding: 0.5em;
	text-align: center;
`;

const VisibilityButton = styled.button`
	background-color: inherit;
	border: 1px solid palevioletred;
	border-radius: 3px;
	box-shadow: 0 5px 15px -5px #00000070;
	color: palevioletred;
	font-size: 1em;
	margin: 1em 0px;
	outline: none;
	padding: 0.25em 2em;
	text-align: center;
	transition: 0.2s linear;

	:hover {
		// background-color: red;
		border: none;
		color: white;
		cursor: pointer;
		//transform: scale(1.1);
	}
`;

const SubmitButton = styled(VisibilityButton)`
	:hover {
		//background-color: palevioletred;
		border: palevioletred;
	}
`;

//form component to create new blogs
const BlogForm = () => {
	const dispatch = useDispatch();
	const [invisible, setinVisible] = useState(true);

	//event handler for toggling the visibility of the form
	const toggleVisiblity = () => {
		setinVisible(!invisible);
	};

	const addBlog = (event) => {
		event.preventDefault();

		//the data from the form
		const title = event.target.title.value;
		event.target.title.value = "";
		const author = event.target.author.value;
		event.target.author.value = "";
		const url = event.target.url.value;
		event.target.url.value = "";

		const blogObject = {
			title,
			author,
			url,
		};

		//action creator for a new blog
		dispatch(newBlog(blogObject));

		//action creator for showing notifications
		dispatch(
			showNotification(
				`a new blog -> ${blogObject.title} by ${blogObject.author} added`,
				5
			)
		);
	};

	//seee whether i can make the login form below hidden by dafult and
	// blur the outside and focus on the inside make it black | dark
	//come out shen i create new and also have a red Cancek button

	return (
		<Wrapper>
			<FormWrapper invisible={invisible}>
				<h2>CreateNew</h2>

				<form onSubmit={addBlog}>
					<div>
						{/* title <input type='text' name='title' value={newTitle} onChange={({ target }) => setNewTitle(target.value)} /> */}
						<Input placeholder="title" type="text" name="title" />
					</div>
					<div>
						{/* author <input id='author' type='text' name='author' value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} /> */}
						<Input placeholder="author" type="text" name="author" />
					</div>
					<div>
						{/* url <input type='text' name='url' value={newUrl} onChange={({ target }) => setNewUrl(target.value)} /> */}
						<Input placeholder="url" type="text" name="url" />
					</div>
					<SubmitButton type="submit"> save </SubmitButton>
				</form>
			</FormWrapper>
			<VisibilityButton type="button" onClick={toggleVisiblity}>
				{" "}
				{invisible ? "create new" : "cancel"}{" "}
			</VisibilityButton>
		</Wrapper>
	);
};

export default BlogForm;
