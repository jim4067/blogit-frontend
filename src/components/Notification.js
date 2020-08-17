import React from 'react';

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

const Notification = ({ message }) => {

    if (message === null) {
        return null
    } else if (message === "wrong username or password") {
        return (
            <div className='error' style={wrong_login_styles}>
                {message}
            </div>
        )
    } else if (message.includes("a new blog")) {
        return (
            <div className='error' style={blog_addition_styles}>
                {message}
            </div>
        )
    }
}

export default Notification;