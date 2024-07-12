import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadProducts();
    }, []);

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price} (Net: {product.netPrice}, Gross: {product.grossPrice})
                </li>
            ))}
        </ul>
    );
};

export default ProductList;