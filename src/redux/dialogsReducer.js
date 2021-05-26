const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
    SEND_MESSAGE = 'SEND_MESSAGE';



let initialState = {
    messages: [ {id: 1,message: 'How are you?!'},
        {id: 2,message: 'Hi!'},
        {id: 3,message: 'Speak english!Speak english!1111'}],
    dialogs: [
        {id: 1,name: 'Dima'},
        {id: 2,name: 'Andrey'},
        {id: 3,name: 'Nina'},
        {id: 4,name: 'Alex'},
        {id: 5,name: 'Valera'},
        {id: 6,name: 'Sonya'},
        {id: 7,name: 'Maria'}
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
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