import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let Navbar = props => (
    <div>
        <a href="/">Home</a>
        <br/>
        { 
            props.categories.map(category =>
            <p key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
            </p>    
            )
        }
    </div>
);

export default connect( (state) => ({categories : state.categories}) )(Navbar);