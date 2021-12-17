import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

type state = {
    state: any
    store: any
    renderEntireTree: any
}

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}/>
            <App/>
            {/*<App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />*/}
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(()=> {
    let state = store.getState();
    renderEntireTree();
});