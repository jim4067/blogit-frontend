import React, { useState } from "react";
import styled from "styled-components";

//styles for the buttons (loggin in, creating a new blog and cancelling)
const LoginButton = styled.button`
	background-color: #f1f1f1;
	border: none;
	border-radius: 6px;
	box-shadow: 0 5px 15px -5px #00000070;
	color: #3498db;
	font-size: large;
	height: 40px;
	margin-top: 40vh;
	position: relative;
	text-align: center;
	transition: 0.2s linear;
    width: 200px;
    
    :hover{
        color: white;
        background-color: #3498db;
        cursor: pointer;
        transform: scale(1.1);      
    }
`;

const LoginDiv = styled.div`
	text-align: center;
`;

const LoginCancel = styled.button`
	background-color: #f1f1f1;
	border: none;
	border-radius: 6px;
	box-shadow: 0 5px 15px -5px #00000070;
	color: #3498db;
    font-size: large;
    height: 40px;
    text-align: center;
    transform: translate(60vh, 60%);
	transition: 0.2s linear;
	width: 200px;

	:hover {
		color: white;
		background-color: red;
		cursor: pointer;
        transform: scale(1.1);
        transform: translate(60vh, 60%);
	}
`;

const Togglable = (props) => {
    const [visible, setVisible] = useState(false);

    //by default the button is set to display:"" since state is false
    //in short -> show button and hide the  form
    const hideWhenVisible = { display: visible ? "none" : "" };
    //by default the form display is set to display:"none" since state has changed to true
    //in short -> hide button and display the form with the cancel button
    const showWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const buttonName = props.buttonLabel;

    //Conditional rendering here because of styling. this component wraps around the BlogForm and LoginForm components
    if (buttonName.includes("log in")) {
        return (
            <div>
                <LoginDiv style={hideWhenVisible}>
                    {/* put the conditional rendering for how the button should be shown
                    maybe I should add a banner here to occupy the dead space when only the log in button is shown
                    */}
                    <LoginButton onClick={toggleVisibility}>
                        {" "}
                        {props.buttonLabel}{" "}
                    </LoginButton>
                </LoginDiv>
                <div style={showWhenVisible}>
                    {props.children}

                    <LoginCancel onClick={toggleVisibility}>
                        {" "}
						cancel {" "}
                    </LoginCancel>
                </div>
            </div>
        );
    } else if (buttonName.includes("new blog")) {
        return (
            <div>
                <div style={hideWhenVisible}>
                    {/* put the conditional rendering for how the button should be shown */}
                    <button onClick={toggleVisibility}>
                        {" "}
                        {props.buttonLabel}{" "}
                    </button>
                </div>
                <div style={showWhenVisible}>
                    {props.children}

                    <button onClick={toggleVisibility}> cancel </button>
                </div>
            </div>
        );
    }
};

export default Togglable;

//to do
//make the styling for adding the blogs to be round with the + sign / something similar
//find the way to style this component effectively without affecting the content below it

//IMPORTANT NOTE
//when styling this component use the buttonLabel to know how to style it
//eg if(buttonLabel == 'login') use LoginButton styles else if
//the buttonLabel is something else, use those styles
