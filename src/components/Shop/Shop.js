import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    //using useproduct hook instead of usestate here
    //const [products, setProducts] = useProducts([]);

    //fetching previously added products in cart
    //using usecart hook instead of usestate and useffect
    const [cart, setCart] = useCart();

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])


    //event listenter for add to cart button of product
    //declered here in parent component to have it accessible in the parent class
    const handleAddToCart = (selectedProduct) => {

        //spreading the already added products and adding new product
        let newCart = [];
        const exist = cart.find(product => product._id === selectedProduct._id);

        //if product not already added then add new
        if (!exist) {

            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        //if product already added then increase quantity
        else {
            const remaining = cart.filter(product => product._id !== selectedProduct._id);
            exist.quantity += 1;
            newCart = [...remaining, exist];
        }

        setCart(newCart);

        //adding to local storage
        addToDb(selectedProduct._id);
    }

    return (
        <div className='shop-container'>
            <div>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}

                            //sending the event listener to the product where it will be used
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =>
                            <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}>{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className='review-button'>Review Orders</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;