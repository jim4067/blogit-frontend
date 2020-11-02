import React from 'react';
import { useSelector } from 'react-redux';

//this is the component that is going to list all the users
//create a services module that makes a request to the api endpoint /api/users in the user reducer 
//and import it here. From there on map the data received here
//return user.name for the names of the user

//important see if the state of the blogs returned contains the name of the user so that i can use that

const DisplayUsers = () => {

    const users = useSelector(state => state.users);

    return (
        <div>
            <h2>USERS</h2>

            {users.map((user) =>
                <p key={user.id} >{user.name} has {user.blogs.length}</p>
            )}

        </div>
    );
}

export default DisplayUsers;
