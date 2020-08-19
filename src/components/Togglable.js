import React, { useState } from 'react';

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    //by default the login button is set to display:"" since state is false
    const hideWhenVisible = { display: visible ? "none" : "" };
    //by default the form display is set to display:none since state has changed to true
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
                <button onClick={toggleVisibility}> cancel </button>
                {props.children}
            </div>
        </div>
    );
}

export default Togglable;