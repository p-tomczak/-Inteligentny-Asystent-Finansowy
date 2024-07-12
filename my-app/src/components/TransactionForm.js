import React, { useState } from 'react';
import api from '../api';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createTransaction(formData);
            alert('Transaction created successfully!');
            setFormData({ amount: '', description: '' });
        } catch (error) {
            console.error('Error creating transaction:', error);
            alert('Failed to create transaction. Please try again.');
        }
    };

    return (
        <div>
            <h2>Dodaj transakcję</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kwota:</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Opis:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Dodaj transakcję</button>
            </form>
        </div>
    );
};

export default TransactionForm;
