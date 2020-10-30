import React from 'react';
import { useSelector } from 'react-redux';
import Blog from './Blog';

//component to display blogs if user logges in
const DisplayBlogs = (props) => {
    const blogs = useSelector(state => state.blogs);

    return (
        <div>
            <h2>Blogs</h2>

            {/* <p>
                {`logged in as ${props.user.name}`}
                <button onClick={props.handleLogout}>logout</button>
            </p> */}

            {
                blogs.map((blog) =>
                    <Blog key={blog.id} blog={blog} />
            )}

            {/* {props.children} */}

        </div>
    );
}


export default DisplayBlogs;

//this component displays the user logged in and the logout button
//
