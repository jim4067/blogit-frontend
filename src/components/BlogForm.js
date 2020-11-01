import React from 'react';
import { useDispatch } from 'react-redux';

import { newBlog } from '../reducers/blogReducer';
import { showNotification } from '../reducers/notificationReducer';

//form component to create new blogs
const BlogForm = () => {
    const dispatch = useDispatch();

    const addBlog = (event) => {

        event.preventDefault();

        //the data from the form
        const title = event.target.title.value;
        event.target.title.value = "";
        const author = event.target.author.value;
        event.target.author.value = "";
        const url = event.target.url.value;
        event.target.url.value = "";

        const blogObject = {
            title,
            author,
            url
        }

        //action creator for a new blog
        dispatch(newBlog(blogObject));

        //action creator for showing notifications
        dispatch(showNotification(`a new blog -> ${blogObject.title} by ${blogObject.author} added`, 5));
    }

    return (
        <div>
            <h2>CreateNew</h2>

            <form onSubmit={addBlog} >
                <div>
                    {/* title <input type='text' name='title' value={newTitle} onChange={({ target }) => setNewTitle(target.value)} /> */}
                    title <input type='text' name='title' />
                </div>
                <div>
                    {/* author <input id='author' type='text' name='author' value={newAuthor} onChange={({ target }) => setNewAuthor(target.value)} /> */}
                    author <input type='text' name='author' />
                </div>
                <div>
                    {/* url <input type='text' name='url' value={newUrl} onChange={({ target }) => setNewUrl(target.value)} /> */}
                    url <input type='text' name='url' />
                </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default BlogForm;