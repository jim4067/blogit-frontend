//import loginService from '../services/login';

//Store the information about the signed in user in the Redux store.

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'INIT USER':
            return action.data;
        default:
            return state;
    }
}

//the action creator for storing the user go in here
//guess that the user will have to log in here and the data returned will be user
// Should I move the entire login function here?

export const loggedUser = (user) => {
    return {
        type: 'INIT USER',
        data: user
    }
}

export default userReducer;