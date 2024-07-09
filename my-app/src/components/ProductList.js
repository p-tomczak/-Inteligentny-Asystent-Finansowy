import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/products'); // Ustaw odpowiedni URL do swojego backendu
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Lista produktów</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} PLN
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
