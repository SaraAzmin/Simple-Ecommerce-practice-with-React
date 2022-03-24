import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;

    //calculating total price and total shipping
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;