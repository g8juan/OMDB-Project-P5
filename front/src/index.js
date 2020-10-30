import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import { Provider } from 'react-redux'
import store from './store/store'
import {BrowserRouter, Route} from "react-router-dom";


var app = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Main}/>
        </BrowserRouter>
    </Provider>,
    app
);