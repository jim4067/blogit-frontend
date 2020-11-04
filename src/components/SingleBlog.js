import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { likeBlog } from '../reducers/blogReducer';

const Wrapper = styled.div`
	border: 0.3px solid;
	line-height: 30px;
	margin: 3px;
	padding: 4px;
`;
const StyledHeading = styled.h2`
	margin: 20px 0px;
	padding: 0px 0px 0px 30px;
`;
const StyledLink = styled.a`
	color: papayawhip;
	padding: 0px 0px 0px 30px;
	text-decoration: none;

	:hover {
		cursor: pointer;
		color: palevioletred;
	}
`;
const StyledParagraph = styled.p`
	padding: 0px 0px 0px 30px;
`;

const StyledButton = styled.button`
    background-color: papayawhip;
    border: none;
    height: 25px;
    margin: 0px 20px;
	outline: none;    
    transition: .2s linear;
    width: 60px;

	:hover{
		color: palevioletred;
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const SingleBlog = () => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    const match = useRouteMatch('/blogs/:id');

    const singleBlog = match
        ? blogs.find((blog) => blog.id === match.params.id)
        : null;

    //event handler for liking a blog
    const increaseLikeOf = (id) => {
        dispatch(likeBlog(id));
    }

    //when the state is still null/an empty array
    if (!singleBlog) {
        return null;
    }

    return (
        <Wrapper>
            <StyledHeading>{singleBlog.title}</StyledHeading>
            <StyledLink title={`visit blog ${singleBlog.title}`} href={`${singleBlog.url}`}> {singleBlog.url}</StyledLink>
            <StyledParagraph>likes {singleBlog.likes} <StyledButton onClick={() => increaseLikeOf(singleBlog.id)} > like </StyledButton> </StyledParagraph>
            <StyledParagraph>added by {singleBlog.user ? singleBlog.user.name : 'N/A'}</StyledParagraph>
        </Wrapper>
    );

}

export default SingleBlog;