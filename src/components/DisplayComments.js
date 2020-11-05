import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { makeComment } from '../reducers/blogReducer';

const StyledHeading = styled.h3`
padding: 1em 0px;
text-align: center;
`

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

const StyledList = styled.li`
	list-style-type: none;
    margin: 1em 0.25em;
`;

const StyledButton = styled.button`
    background-color: papayawhip;
    border: none;
    height: 2.5em;
    margin: 1em;
    outline: none;    
    padding: em;
    transition: .2s linear;
    width: 6em;

	:hover{
		color: palevioletred;
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const DisplayComments = () => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    const match = useRouteMatch('/blogs/:id');
    const singleBlog = match
        ? blogs.find((blog) => blog.id === match.params.id)
        : null;

    const handleComment = (event) => {
        event.preventDefault();

        const comment = event.target.comment.value;
        event.target.comment.value = "";

        dispatch(makeComment(singleBlog.id, comment))
    }

    return (
        <div style={{ }} >
            <StyledHeading >comments</StyledHeading>

            <ul>
                {
                    singleBlog.comments.map((comment) =>
                        <StyledList key={comment}>
                            {comment}
                        </StyledList>
                    )
                }
            </ul>
            <form onSubmit={handleComment} >
                <Input name='comment' />
                <StyledButton type='submit' > comment</StyledButton>
            </form>

        </div>
    );
}

export default DisplayComments;