import React from 'react';
import { connect } from 'react-redux';

let Productspages = props => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id);
    let foundCategory = props.categories.find(category => category.id === foundProduct.category);
    return <div>
        <h2>{`One of my antique ${foundCategory.title} which depicts ${foundProduct.title}`}</h2>
    </div>
};

export default connect( (state) => ({products : state.products, categories : state.categories}) )(Productspages);