import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
    background-color: black;
    box-shadow: 0 5px 15px -5px #00000070;
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 2vh 0px;
    top: 0;

    @media (max-width: 980px){
        font-size: 18px;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`;
const NavBar1 = styled.section`
	display: flex;
	justify-content: space-around;
    padding: 5px 20px;
`;
const NavBar2 = styled.section`

	@media  (max-width: 980px){
        padding: 15px 0px;
       text-align: center;
    }
`;
const StyledLink = styled(Link)`
	text-decoration: none;
    color: white;
    margin-left: 30px;
    padding: 0px 10px;
    transition: .2s linear;
    
    :hover{
        color: #3498db;
    }
`;
const LogOutButton = styled.button`
    background-color: black;
    border: 1px solid red;
    box-shadow: 0 5px 15px -5px #00000070;
    border-radius: 3px;
    color: red;
    height: 35px;
	margin: 0px 34px 0px 20px;
	//outline: none;
	padding: 0px 10px;
    transition: 0.2s linear;
    width: 70px;

	:hover {
        background-color: red;
		color: #f1f1f1;
        cursor: pointer;
        transform: scale(1.1);
    }

    @media (max-width: 670px){
        margin-top: 20px;
    }
`;

const Navigation = ({ user, handleLogout }) => {


    return (
        <div>
            <Wrapper>
                <NavBar1>
                    <StyledLink to="/users"> users</StyledLink>
                    <StyledLink to="/blogs">blogs</StyledLink>
                </NavBar1>
                <NavBar2>
                    {`logged in as ${user.name}`}
                    <LogOutButton onClick={handleLogout}>logout</LogOutButton>
                </NavBar2>
            </Wrapper>
        </div>
    );
};

export default Navigation;
