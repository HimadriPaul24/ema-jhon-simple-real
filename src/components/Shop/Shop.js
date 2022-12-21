import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const[products,setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(() => {
           fetch('./products.JSON')
           .then(res=> res.json())
           .then(data=> setProducts(data));
        //    .then(data=> console.log(data));

    },[])

       const handleAddToCart= (product) => {
        const newCart = [...cart,product]
        setCart(newCart);
        // console.log("clicked");
        // console.log(product.name);
        console.log(product);
       } 

    return (
        <div className="shop-container">
        <div className="product-container">
                 {/* <h3>Products: {products.length}</h3> */}
                 {
                    products.map(product=> <Product 
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                 }
        </div>
        <div className="cart-container">
               <Cart cart={cart}></Cart>
        </div>
            
        </div>
    );
};

export default Shop;