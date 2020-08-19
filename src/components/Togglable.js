import React, { useState } from 'react';

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    //by default the login button is set to display:"" since state is false
    //in short -> show button and hide the login form
    const hideWhenVisible = { display: visible ? "none" : "" };
    //by default the form display is set to display:"none" since state has changed to true
    //in short -> hide button for login and display hte noteform with the cancel button
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}> {props.buttonLabel} </button>
            </div>
            <div style={showWhenVisible}>

                {props.children}

                <button onClick={toggleVisibility}> cancel </button>
            </div>
        </div>
    );
}

export default Togglable;