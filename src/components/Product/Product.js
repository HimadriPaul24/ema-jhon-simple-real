import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const{name,img,seller,price,stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
          {/* <h2>This is product</h2>0 */}
          <div><img src={img} alt="" /></div>
          <div>
          <h4 className="product-name">{name}</h4>
          <p><small>by:{seller}</small></p>
          <p>Price: {price}</p>
          <p><small>only {stock} left in stock - order soon</small></p>
          <button 
               onClick={() => props.handleAddToCart(props.product)}
          className="button-regular"
          >{cartIcon}add to cart</button>
          </div>
        </div>
    );
};

export default Product;