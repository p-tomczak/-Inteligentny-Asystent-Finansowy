import React, { useState } from 'react';
import { fetchProducts, fetchTransactions } from '../api';

const TransactionForm = () => {
    const [products, setProducts] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const handleFetchProducts = async () => {
        try {
            const productsData = await fetchProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleFetchTransactions = async () => {
        try {
            const transactionsData = await fetchTransactions();
            setTransactions(transactionsData);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div>
            <h3>Transaction Form</h3>
            <button onClick={handleFetchProducts}>Fetch Products</button>
            <button onClick={handleFetchTransactions}>Fetch Transactions</button>

            <h4>Products:</h4>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <h4>Transactions:</h4>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionForm;
