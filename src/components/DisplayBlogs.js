import React from 'react';
import Blog from './Blog';
import BlogForm from './BlogForm';

//component to display blogs if user logges in
const DisplayBlogs = ({ blogs, user, handleLogout, createBlog }) => {

    return (
        <div>
            <h2>Blogs</h2>

            <p>
                {`logged in as ${user.name}`}
                <button onClick={handleLogout}>logout</button>
            </p>

            <BlogForm createBlog={createBlog} />

            {blogs.map((blog) =>
                <Blog key={blog.id} blog={blog} />
            )}

        </div>
    );
}


export default DisplayBlogs;