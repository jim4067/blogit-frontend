import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeading = styled.h2`
text-align: center;
padding: 10px 16px;
`
const StyledList = styled.li`
list-style-type: none;
padding: 10px 0px;
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
            <StyledHeading>{singleUser.name}</StyledHeading>

            {
                singleUser.blogs.map((blog) =>
                    <ul key={blog.id} style={{ textAlign: 'center' }}>
                        <StyledList > {blog.title}  </StyledList>
                        <hr />
                    </ul>
                )
            }
        </div>
    );
}

export default User;