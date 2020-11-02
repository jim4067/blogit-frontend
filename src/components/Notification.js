import React from 'react';
import { useSelector } from 'react-redux';//to access the state of the notification reducer

const wrong_login_styles = {
    "border": "3px solid red",
    "border-radius": "3px",
    "color": "red",
    "font-size": "20px",
    "margin-top": "10px",
    "padding": "10px",
    "text-align": "center"
}

const blog_addition_styles = {
    "border": "3px solid green",
    "border-radius": "3px",
    "color": "green",
    "font-size": "20px",
    "margin-top": "10px",
    "padding": "10px",
    "text-align": "center"
}

const Notification = () => {
    const notification = useSelector(state => state.notification);

    if (notification === null) {
        return null
    } else if (notification === "wrong username or password") {
        return (
            <div className='error' style={wrong_login_styles}>
                {notification}
            </div>
        )
    } else if (notification.includes("a new blog")) {
        return (
            <div style={blog_addition_styles}>
                {notification}
            </div>
        )
    } else if (notification.includes("could not connect to the server")) {
        return (
            <div className='error' style={wrong_login_styles} >
                {notification}
            </div>
        );
    }
}

export default Notification;

//use the useState func to access the state in the redux store for the app