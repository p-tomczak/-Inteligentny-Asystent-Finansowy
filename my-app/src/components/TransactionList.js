import React, { useState, useEffect } from 'react';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/transactions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    const data = await response.json();
                    setTransactions(data);
                }
            } catch (error) {
                console.error('Fetch Error:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Lista transakcji</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.productName} - {transaction.amount} x {transaction.unitPrice} PLN
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
