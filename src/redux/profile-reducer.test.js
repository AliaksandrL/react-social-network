import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldnt be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});