import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Name = styled.span`
// 	text-align: center;
// 	width: 70px;
// `;
// const Blogs = styled.span`
// 	text-align: right;
// `;

const StyledNameLink = styled(Link)`
    color: black;
	text-decoration: none;
	transition: 0.2s linear;

	:hover {
        cursor: pointer;
        color: palevioletred;
	}
`;

const Users = ({ users }) => {
    //in order to get individual blogs of a user. see if I have toimplement this in the backend -> no
    //create two components User -> blogs of indiv user and users for total no of blogs users have created


    return (
        <div>

            <section style={{ padding: '10px 20px' }}>
                <span> <StyledNameLink to={`/users/${users.id}`}> {users.name}  has created {users.blogs.length} blogs </StyledNameLink></span>
                <hr style={{ 'borderColor': 'aqua' }} />
            </section>

        </div>
    );
}

export default Users;