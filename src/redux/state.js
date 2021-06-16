import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
    ],
    newPostText: 'it.com' 
  },
  messagesPage: {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Nastya" },
        { id: 4, name: "Zhenya" },
        { id: 5, name: "Valera" },
      ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it?" },
      { id: 3, message: "Yes!" },
      { id: 4, message: "No" },
      { id: 5, message: "Yoo" },
    ]
  }
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}


export default state;
