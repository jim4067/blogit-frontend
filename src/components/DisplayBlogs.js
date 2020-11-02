import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Blog from './Blog';
import { likeBlog, removeBlog } from '../reducers/blogReducer';
import styled from 'styled-components';

const StyledHeading = styled.h2`
text-align: center;
`

//component to display blogs if user logges in
//Putting the action creators for removing and liking a blog here since it is higher than the Blog component
const DisplayBlogs = (props) => {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();

    //event handler to remove a blog
    const handleRemOf = (blog) => {

        if (window.confirm(`remove blog ${blog.title} by ${blog.author}`)) { //if true then dispatch the action for removing a blog
            dispatch(removeBlog(blog.id))
        }
    }

    return (
        <div className='DisplayBlogs-container' >
            <StyledHeading className='blog-title'>Blogs</StyledHeading>

            {
                blogs.map((blog) =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        increaseLikesOf={() => dispatch(likeBlog(blog.id))}
                        handleRemOf={() => handleRemOf(blog)}
                    />
                )
            }

            {props.children}

        </div>
    );
}


export default DisplayBlogs;

//this component displays the user logged in and the logout button
//
