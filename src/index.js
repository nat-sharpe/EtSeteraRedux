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
        {id: "1", category: "2", title: "Abraham Lincoln", url: "https://p1.liveauctioneers.com/496/17300/5810694_1_x.jpg?version=1224172688&width=280&format=pjpg&auto=webp&quality=50"},
        {id: "2", category: "2", title: "Sitting Bull", url: "https://p1.liveauctioneers.com/906/35418/14621922_1_x.jpg?version=1354308111&width=280&format=pjpg&auto=webp&quality=50"},
        {id: "3", category: "3", title: "A New York City Streetview", url: "https://p1.liveauctioneers.com/581/38052/16204310_1_x.jpg?version=1362079675&width=280&format=pjpg&auto=webp&quality=50"},
        {id: "4", category: "1", title: "General Grant", url: "https://p1.liveauctioneers.com/492/96987/49545957_1_x.jpg?version=1480512563&width=280&format=pjpg&auto=webp&quality=50"},
        {id: "5", category: "1", title: "Wild Bill Hickock", url: "https://p1.liveauctioneers.com/906/56247/27469282_1_x.jpg?version=1401481666&width=280&format=pjpg&auto=webp&quality=50"},
    ],
    cartItems: []
}

let reducer = (oldState, action) => {
    if (action.type === "ADD") {
        return {
            ...oldState, 
            cartItems: [...oldState.cartItems, action.payload]
        }
    }
    if (action.type === "REMOVE") {
        return {
            ...oldState, 
            cartItems: (oldState.cartItems).filter(id => id !== action.payload)
        }
    }
    return oldState;
}

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let app =
    <Provider store={store}>    
        <Router />
    </Provider>;

ReactDOM.render(app, document.getElementById('root'));
