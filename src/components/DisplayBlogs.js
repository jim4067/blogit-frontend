import React from 'react';
import Blog from './Blog'

//component to display blogs if user logges in
const DisplayBlogs = ({ blogs, user }) => {

    return (
        <div>
            <h2>Blogs</h2>

            <p>
                {`logged in as ${user.name}`}
                <button>logout</button>
            </p>

            {blogs.map((blog) =>
                <Blog key={blog.id} blog={blog} />
            )}

        </div>
    );
}


export default DisplayBlogs;