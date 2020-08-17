import React from 'react';

//form component to create new blogs
const CreateBlog = ({createBlog, newTitle, newAuthor, newUrl, handleTitleChange, handleAuthorChage , handleUrlChange}) => {
 
    return (
        <div>
            <h2>CreateNew</h2>

            <form onSubmit={createBlog} >
                <div>
                    title <input type='text' name='title'  value={newTitle} onChange={ handleTitleChange } />
                </div>
                <div>
                    author <input type='text' name='author'  value={newAuthor} onChange={ handleAuthorChage } />
                </div>
                <div>
                    url <input type='text' name='url'  value={newUrl} onChange={ handleUrlChange } />
               </div>
                <button type='submit'>create</button>
            </form>

        </div>
    );
}

export default CreateBlog;