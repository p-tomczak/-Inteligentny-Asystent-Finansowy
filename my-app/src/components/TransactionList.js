import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchTransactions } from '../api';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactionsData = async () => {
            try {
                const transactionsData = await fetchTransactions();
                setTransactions(transactionsData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactionsData();
    }, []);

    return (
        <div>
            {}
        </div>
    );
};

export default TransactionList;
