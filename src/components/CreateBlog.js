import React, { useState } from 'react';

//form component to create new blogs
const CreateBlog = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newUrl, setNewUrl] = useState("");

    //const [newBlog, setNewBlog] = useState("");

    return (
        <div>
            <h2>CreateNew</h2>

            <form onSubmit={CreateBlog} >
                <div>
                    title <input type='text' name='title'  value={newTitle} onChange={ ({target}) => setNewTitle(target.value) } />
                </div>
                <div>
                    author <input type='text' name='author'  value={newAuthor} onChange={ ({target}) => setNewAuthor(target.value) } />
                </div>
                <div>
                    url <input type='text' name='url'  value={newUrl} onChange={ ({target}) => setNewUrl(target.value) } />
               </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateBlog;