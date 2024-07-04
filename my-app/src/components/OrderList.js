import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <strong>Order ID: {order.id}</strong><br />
                        Date: {new Date(order.orderDate).toLocaleDateString()}<br />
                        Customer ID: {order.customerId}<br />
                        <ul>
                            {order.orderItems.map(item => (
                                <li key={item.id}>
                                    {item.quantity} x {item.product.name} - {item.unitPrice} PLN
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
