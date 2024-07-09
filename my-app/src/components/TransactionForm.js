import React, { useState } from 'react';
import api from './api';

const TransactionForm = () => {
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const transactionData = {
            productName,
            amount: parseInt(amount),
            unitPrice: parseFloat(unitPrice),
        };

        try {
            await api.createTransaction(transactionData);
            // Wstaw tutaj logikę do obsługi sukcesu, np. wyzerowanie pól formularza
            setProductName('');
            setAmount('');
            setUnitPrice('');
        } catch (error) {
            console.error('Transaction creation error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Dodaj transakcję</h2>
            <div>
                <label>Nazwa produktu:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Ilość:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cena jednostkowa:</label>
                <input
                    type="number"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Dodaj transakcję</button>
        </form>
    );
};

export default TransactionForm;
