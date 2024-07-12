import React, { useState } from 'react';
import { createTransaction } from '../api';

const TransactionForm = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTransaction({ productId, quantity, price, type });

        } catch (error) {
            console.error('Error creating transaction:', error);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="purchase">Purchase</option>
                <option value="return">Return</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionForm;