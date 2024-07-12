import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchTransactions } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsData();
    }, []);

    return (
        <div>
            {}
        </div>
    );
};

export default ProductList;
