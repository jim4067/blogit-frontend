import React from 'react';
import Blog from './Blog'

//component to display blogs if user logges in
	const DisplayBlogs = ({blogs}) => {

		return(
			<div>
				<h2>Blogs</h2>
				{blogs.map((blog) =>
				<Blog key={blog.id} blog={blog} />
			)}
			</div>
		);
	}


    export default DisplayBlogs;