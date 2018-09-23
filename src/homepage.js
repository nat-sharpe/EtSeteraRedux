import React from 'react';
import { connect } from 'react-redux';

let Homepage = props => (
    <ul>
        { 
            props.products.map(product =>
            <li key={product.id}>
                <h3>{`Antique photo of ${product.title}`}</h3>
                <img src={product.url} height="150" width="150" />
            </li>    
            )
        }
    </ul>);

export default connect( (state) => ({products : state.products}) )(Homepage);