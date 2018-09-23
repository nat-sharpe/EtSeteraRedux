import React from 'react';
import { connect } from 'react-redux';

let Productspages = props => {
    let foundProduct = props.products.find(product => product.id === props.match.params.id);
    let foundCategory = props.categories.find(category => category.id === foundProduct.category);
    return <div>
        <h2>{`One of our antique ${foundCategory.title} portraying ${foundProduct.title}`}</h2>
        <img src={foundProduct.url} width="280" />
    </div>
};

export default connect( (state) => ({products : state.products, categories : state.categories}) )(Productspages);