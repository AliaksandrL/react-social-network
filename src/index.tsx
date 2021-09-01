import store from "./redux/state";
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

let renderEntireTree = (props: state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={props.state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);