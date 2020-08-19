import React from 'react';

//component to display blogs if user logges in
const DisplayBlogs = (props) => {

    return (
        <div>
            <h2>Blogs</h2>

            <p>
                {`logged in as ${props.user.name}`}
                <button onClick={props.handleLogout}>logout</button>
            </p>

            {props.children}

        </div>
    );
}


export default DisplayBlogs;

/*
<BlogForm createBlog={createBlog} />

            {blogs.map((blog) =>
                <Blog key={blog.id} blog={blog} />
            )}

*/