import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeading = styled.h2`
text-align: center;
padding: 10px 16px;
`

//to list all the blogs that a user has made


const User = () => {
    const users = useSelector(state => state.users);

    const match = useRouteMatch('/users/:id');

    const singleUser = match
        ? users.find((user) => user.id === match.params.id)
        : null;

    if (!singleUser) {
        return null;
    }
    return (
        <div>
            <StyledHeading>{singleUser.name}</StyledHeading> <span>created the following</span>

            {
                singleUser.blogs.map((blog) =>
                    <li key={blog.id}> {blog.title}</li>
                )
            }
            {
                console.log("the single users name", singleUser.name)
            }
        </div>
    );
}

export default User;