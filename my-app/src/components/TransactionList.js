import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTransactionsData = async () => {
            setLoading(true);
            try {
                const transactionsData = await fetchTransactions();
                setTransactions(transactionsData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactionsData();
    }, []);

    if (loading) {
        return <p>Loading transactions...</p>;
    }

    return (
        <div>
            <h3>Lista transakcji</h3>
            <ul>
                {transactions && transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
