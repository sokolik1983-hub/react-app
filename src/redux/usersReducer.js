const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
    SEND_MESSAGE = 'SEND_MESSAGE';



let initialState = {
    users: [
        {id: 1, fullName: 'Dima', status: 'Work', location: {city: 'Minsk', country: 'Russia'}},
        {id: 2, fullName: 'Andrey', status: 'Work', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, fullName: 'Nina', status: 'Work', location: {city: 'Kiev', country: 'Ucraine'}},
        {id: 4, fullName: 'Alex', status: 'Work', location: {city: 'Minsk', country: 'Russia'}},
        {id: 5, fullName: 'Valera', status: 'Work', location: {city: 'Minsk', country: 'Russia'}},
        {id: 6, fullName: 'Sonya', status: 'Work', location: {city: 'Minsk', country: 'Russia'}},
        {id: 7, fullName: 'Maria', status: 'Work', location: {city: 'Minsk', country: 'Russia'}}
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}


export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}


export default dialogsReducer;