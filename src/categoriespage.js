import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let Categoriespage = props => {
    let foundProducts = props.products.filter(product => product.category === props.match.params.id);
    return <ul>
            { 
                foundProducts.map(product =>
                    <Link to={`/products/${product.id}`}>
                        <li key={product.id}>
                            <h3>{`Antique photo of ${product.title}`}</h3>
                            <img src={product.url} height="150" width="150" />
                        </li>       
                    </Link>
                )
            }
        </ul>;
};

export default connect( (state) => ({products : state.products}) )(Categoriespage);