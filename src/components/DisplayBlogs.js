import React from 'react';
import Blog from './Blog';
import CreateBlog from './CreateBlog';

//component to display blogs if user logges in
const DisplayBlogs = ({ blogs, user, handleLogout, createBlog, handleTitleChange, handleAuthorChage , handleUrlChange }) => {

    return (
        <div>
            <h2>Blogs</h2>

            <p>
                {`logged in as ${user.name}`}
                <button onClick={handleLogout}>logout</button>
            </p>

            <CreateBlog createBlog={createBlog} handleTitleChange={handleTitleChange} handleAuthorChage={handleAuthorChage}
             handleUrlChange={handleUrlChange} />

            {blogs.map((blog) =>
                <Blog key={blog.id} blog={blog} />
            )}

        </div>
    );
}


export default DisplayBlogs;