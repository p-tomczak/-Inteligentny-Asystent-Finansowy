import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const data = await fetchTransactions();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        loadTransactions();
    }, []);

    return (
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    {transaction.productId} - {transaction.quantity} @ {transaction.price} - {transaction.type}
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;