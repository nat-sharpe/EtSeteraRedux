import React from 'react';
import { connect } from 'react-redux';

let Categoriespage = props => {
    let foundProducts = props.products.filter(product => product.category === props.match.params.id);
    return <ul>
            { 
                foundProducts.map(product =>
                <li key={product.id}>
                {`Antique photo of ${product.title}`}
                </li>    
                )
            }
        </ul>;
};

export default connect( (state) => ({products : state.products}) )(Categoriespage);