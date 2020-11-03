import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Name = styled.span`
text-align: center;
width: 70px;
`
const Blogs = styled.span`
text-align: right;
`
const StyledNameLink = styled(Link)`
text-decoration: none;
`

const Users = ({ users }) => {
    //in order to get individual blogs of a user. see if I have toimplement this in the backend -> no
    //create two components User -> blogs of indiv user and users for total no of blogs users have created


    return (
        <div>

            <section>
                <Name><StyledNameLink to={`/users/${users.id}`}> {users.name} </StyledNameLink> has created </Name> <Blogs>{users.blogs.length} blogs</Blogs>
            </section>

        </div>
    );
}

export default Users;