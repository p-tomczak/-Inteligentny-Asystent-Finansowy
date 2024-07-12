
import React, { useState, useEffect } from 'react';
import api from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const data = await api.fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProductsData();
    }, []);

    return (
        <div>
            <h2>Lista Produktów</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
