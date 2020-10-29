const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET NOTIFICATION':
            return state = action.data;
        case 'CLEAR NOTIFICATION':
            return state = action.data;
        default:
            return state;
    }
}

//for clearing the setTimout method;
let timeoutID;

export const showNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET NOTIFICATION',
            data: message
        });

        setTimeout(() => {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(() => {
                dispatch(hideNotification());
            }, time);

        }, time * 1000);
    }
}


export const hideNotification = () => {
    return ({
        type: 'CLEAR NOTIFICATION',
        data: null
    });
}

export default notificationReducer;

//the showNotification func will be the one to handle showing and removing the notification
//which will be dispatched in the app component