import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    //fetching the fake data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //event listenter for add to cart button of product
    //declered here in parent component to have it accessible in the parent class
    const handleAddToCart = (product) => {

        //spreading the already added products and adding new product
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                        //sending the event listener to the product where it will be used
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summery</h2>
                <p>Selected Items: {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;