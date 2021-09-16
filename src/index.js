import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";


let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(() => {
    renderEntireTree();

//     renderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
});