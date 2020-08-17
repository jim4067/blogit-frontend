import React, { useState } from 'react';

//form component to create new blogs
const CreateBlog = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newUrl, setNewUrl] = useState("");

    return(
        <div>
            <h2>CreateNew</h2>
        </div>
    );
}

export default CreateBlog;