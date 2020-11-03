import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { likeBlog } from '../reducers/blogReducer';

const StyledHeading = styled.h2``;
const StyledLink = styled.a``;
const StyledParagraph = styled.p``;

const SingleBlog = () => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    const match = useRouteMatch('/blogs/:id');

    const singleBlog = match
        ? blogs.find((blog) => blog.id === match.params.id)
        : null;

    console.log('here is what the single blog contains...', singleBlog);

    //event handler for liking a blog
    const increaseLikeOf = (id) => {
        dispatch(likeBlog(id));
    }

    if (!singleBlog) {
        return null;
    }

    return (
        <div>
            <StyledHeading>{singleBlog.title}</StyledHeading>
            <StyledLink title={`visit blog ${singleBlog.title}`} href={`${singleBlog.url}`}> {singleBlog.url}</StyledLink>
            <p>likes {singleBlog.likes} <button onClick={() => increaseLikeOf(singleBlog.id)} > like </button> </p>
            <StyledParagraph>added by {singleBlog.user ? singleBlog.user.name : 'N/A'}</StyledParagraph>
        </div>
    );

}

export default SingleBlog;