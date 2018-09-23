import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './router.js';

let initialState = {
    categories: [
        {id: "1", title: "Tintypes"},
        {id: "2", title: "Cabinet Cards"},
        {id: "3", title: "Ambrotypes"},
    ],
    products: [
        {id: "1", category: "2", title: "Abraham Lincoln"},
        {id: "2", category: "1", title: "Sitting Bull"},
        {id: "3", category: "3", title: "New York City Streetview"},
        {id: "4", category: "3", title: "General Grant"},
    ],
    cartItems: []
}

let reducer = (oldState, action) => {
    if (action.type === "KILL") {
        return "Die!";
    }
    return oldState;
}

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let app =
    <Provider store={store}>    
        <Router />
    </Provider>;

ReactDOM.render(app, document.getElementById('root'));
