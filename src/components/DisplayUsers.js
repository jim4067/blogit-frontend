import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Users from './Users';

//this is the component that is going to list all the users that have created blogs

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
