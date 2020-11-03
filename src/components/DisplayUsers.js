import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Users from './Users';

//this is the component that is going to list all the users
//create a services module that makes a request to the api endpoint /api/users in the user reducer
//and import it here. From there on map the data received here
//return user.name for the names of the user

//important see if the state of the blogs returned contains the name of the user so that i can use that
const StyledHeading = styled.h2`
	margin: 20px 0px;
	text-align: center;
`;

const DisplayUsers = () => {
    const users = useSelector(state => state.users);

    if (users === null) {

        return null;
    }
    return (
        <div>
            <StyledHeading>Users</StyledHeading>

            {/* {users.map((user) =>
            <p key={user.id} >{user.name} has {user.blogs.length}</p>
        )} */}
            {
                users.map((user) =>
                    <Users
                        key={user.id}
                        users={user}
                    />
                )
            }

        </div>
    );
}

export default DisplayUsers;
