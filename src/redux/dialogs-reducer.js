const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Nastya"},
        {id: 4, name: "Zhenya"},
        {id: 5, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it?"},
        {id: 3, message: "Yes!"},
        {id: 4, message: "No"},
        {id: 5, message: "Yoo"},
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
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

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: body})