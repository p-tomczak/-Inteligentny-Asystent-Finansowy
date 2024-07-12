// TransactionList.js

import React, { useState, useEffect } from 'react';
import api from '../api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactionsData = async () => {
            try {
                const data = await api.fetchTransactions();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactionsData();
    }, []);

    return (
        <div>
            <h2>Transakcje</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        Amount: {transaction.amount}, Description: {transaction.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
