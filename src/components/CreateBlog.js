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
                    title
                </div>
                <div>
                    author
                </div>
                <div>
                    url
               </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateBlog;