import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Orders = () => {

    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>This is orders: {products.length}</h1>
        </div>
    );
};

export default Orders; <h1>This is orders</h1>