import React from 'react';

const wrong_login_styles={
    "border" : "3px solid red",
    "border-radius" : "3px" ,
    "color" : "red",
    "font-size" : "20px",
    "margin-top" : "10px",
    "padding" : "10px",
    "text-align" : "center"
}

const Notification = ({message}) => {

    if(message === null) {
        return null
    } else {
        return(
            <div className='error' style={wrong_login_styles}>
                {message}
            </div>
        )
    }
}

export default Notification;