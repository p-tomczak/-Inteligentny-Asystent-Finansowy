import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [customerId, setCustomerId] = useState('');
    const [orderItems, setOrderItems] = useState([]);
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/orders', {
            customerId: customerId,
            orderItems: orderItems
        })
            .then(response => {
                console.log('Order added:', response.data);
                setCustomerId('');
                setOrderItems([]);
            })
            .catch(error => {
                console.error('Error adding order:', error);
            });
    };

    const handleAddItem = () => {
        const newItem = {
            productId: productId,
            quantity: parseInt(quantity)
        };
        setOrderItems([...orderItems, newItem]);
        setProductId('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Order</h2>
            <label>Customer ID: <input type="text" value={customerId} onChange={e => setCustomerId(e.target.value)} /></label><br />
            <label>Product ID: <input type="text" value={productId} onChange={e => setProductId(e.target.value)} /></label><br />
            <label>Quantity: <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} /></label><br />
            <button type="button" onClick={handleAddItem}>Add Item</button><br />
            <ul>
                {orderItems.map((item, index) => (
                    <li key={index}>
                        {item.quantity} x Product ID: {item.productId}
                    </li>
                ))}
            </ul>
            <button type="submit">Add Order</button>
        </form>
    );
};

export default OrderForm;
