import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import blogReducer from './reducers/blogReducer';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    user: userReducer,
    users: usersReducer
});

const store = createStore(
    reducer, composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;


//the store for the blog listing apps state. Should it have been in the src directory;