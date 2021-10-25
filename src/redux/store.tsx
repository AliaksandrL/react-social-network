import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}
type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
type RootStoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

let store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
            newPostText: "it.com",
            profile: null,
            status: ""
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

export default store;
// @ts-ignore
window.state = store;
