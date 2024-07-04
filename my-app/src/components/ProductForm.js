import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/products', {
            name: name,
            price: price
        })
            .then(response => {
                console.log('Product added:', response.data);
                setName('');
                setPrice('');
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <label>Name: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label><br />
            <label>Price: <input type="number" value={price} onChange={e => setPrice(e.target.value)} /></label><br />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
