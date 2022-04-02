import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    //using useproduct hook instead of usestate here
    const [products, setProducts] = useProducts([]);

    //fetching previously added products in cart
    //using usecart hook instead of usestate and useffect
    const [cart, setCart] = useCart(products);

    //event listenter for add to cart button of product
    //declered here in parent component to have it accessible in the parent class
    const handleAddToCart = (selectedProduct) => {

        //spreading the already added products and adding new product
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);

        //if product not already added then add new
        if (!exist) {

            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        //if product already added then increase quantity
        else {
            const remaining = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity += 1;
            newCart = [...remaining, exist];
        }

        setCart(newCart);

        //adding to local storage
        addToDb(selectedProduct.id);
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
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;