import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;

    // const total = cart.reduce((previous,product) => previous+ product.price,0);
    // or
    const totalReducer = (previous,product) => previous + product.price;
    const total = cart.reduce(totalReducer,0);
    const shipping=15;
    const tax=(total+shipping)*10;
    const grandTotal = total+shipping+tax;
    // let total = 0;
    // for(const product of cart){
    //     total=total + product.price;
    // }
    return (
        <div>
            <h3>Order Summary</h3>
           <h5>Items Ordered: {props.cart.length}</h5>
           <p>Total: {total.toFixed(2)}</p>
           <p>Shipping:{shipping}</p>
           <p>Tax: {tax.toFixed(2)}</p>
           <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;