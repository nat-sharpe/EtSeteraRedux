import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar.js';
import Homepage from './homepage.js';
import Categoriespage from './categoriespage.js';
import Productspage from './productspage.js';
import Cartpage from './cartpage.js';

let Router = props => (
    <HashRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" render={
                    (routeProps) => (
                        <Homepage {...routeProps} {...props} />
                    )} />
                }
                <Route exact path="/categories/:id" render={
                    (routeProps) => (
                        <Categoriespage {...routeProps} {...props} />
                    )} />
                }
                <Route exact path="/products/:id" render={
                    (routeProps) => (
                        <Productspage {...routeProps} {...props} />
                    )} />
                }
                <Route exact path="/cart" render={
                    (routeProps) => (
                        <Cartpage {...routeProps} {...props} />
                    )} />
                }
            </Switch>
        </div>
    </HashRouter>

);

export default Router;
