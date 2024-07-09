import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/transactions');
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div>
            <h3>Lista Transakcji</h3>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        ID: {transaction.id}, Produkt ID: {transaction.productId},
                        Ilość: {transaction.quantity}, Cena: {transaction.price},
                        Data: {new Date(transaction.date).toLocaleString()},
                        Typ: {transaction.type}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
