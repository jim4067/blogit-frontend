import userService from '../services/users';

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ALL USERS':
            return action.data;
        case 'NEW USER':
            return [...state, action.data];
        default:
            return state;
    }
}

export const allUsers = () => {
    return async dispatch => {
        const users = await userService.getUsers();

        const unique_users = users.name; /*[... new Set(users.name)];*/

        dispatch({
            type: 'ALL USERS',
            data: unique_users
        })
    }
}

export default usersReducer;