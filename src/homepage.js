import React from 'react';
import { connect } from 'react-redux';

let Homepage = props => (
    <ul>
        { 
            props.products.map(product =>
            <li key={product.id}>
            {`Antique photo of ${product.title}`}
            </li>    
            )
        }
    </ul>);

export default connect( (state) => ({products : state.products}) )(Homepage);