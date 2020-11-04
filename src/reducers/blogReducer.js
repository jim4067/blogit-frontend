import blogService from '../services/blogs';

//function to sort the blogs
const sortBlogs = (blogs) => {
    return blogs.sort((a, b) => b.likes - a.likes);
}

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT BLOGS':
            return sortBlogs(action.data);
        case 'NEW BLOG':
            return [...state, action.data];
        case 'COMMENT': { //forgetting these curly braces will always be the reason for the eslint warnings
            const commented = action.data
            return state.map((blog) => blog.id === commented.id ? commented : blog); //if the commented blog exists return it else return state unchanged
        }
        case 'VOTE': {
            const likedBlog = action.updatedBlog;
            const blogsToSort = state.map(blog => blog.id === likedBlog.id ? likedBlog : blog);
            return sortBlogs(blogsToSort);
        }
        case 'REMOVE':
            return sortBlogs(action.data);
        default:
            return state;
    }
}


export const initializeState = () => {
    return async dispatch => {
        const blogs = await blogService.getAll();

        dispatch({
            type: 'INIT BLOGS',
            data: blogs
        });
    }
}

export const newBlog = (blogObject) => {
    return async dispatch => {
        const addedBlog = await blogService.create(blogObject);

        dispatch({
            type: 'NEW BLOG',
            data: addedBlog
        })
    }
}

export const makeComment = (id, comment) => {
    return async dispatch => {
        const commented = await blogService.comment(id, comment);

        dispatch({
            type: 'COMMENT',
            data: commented
        });
    }
}

export const likeBlog = (id) => {
    return async dispatch => {
        const allBlogs = await blogService.getAll();
        const blogToLike = allBlogs.find(blog => blog.id === id);
        const likedBlog = { ...blogToLike, likes: blogToLike.likes + 1 };
        const updatedBlog = await blogService.update(id, likedBlog);
        //console.log(updatedBlog.id);

        dispatch({
            type: 'VOTE',
            updatedBlog
        });
    }
}

export const removeBlog = (id) => {
    return async dispatch => {
        await blogService.remove(id);
        const allBlogs = await blogService.getAll();
        const afterDeletion = allBlogs.filter(blogs => blogs.id !== id);

        dispatch({
            type: 'REMOVE',
            data: afterDeletion
        });
    }
}

export default blogReducer;

//make functions in the app component so as to make sure that the notifications
//are dispatched too