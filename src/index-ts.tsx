import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

type state = {
    state: any
    store: any
    renderEntireTree: any
}

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(()=> {
    let state = store.getState();
    renderEntireTree();
});