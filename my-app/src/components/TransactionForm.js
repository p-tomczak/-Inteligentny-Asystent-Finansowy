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
            <h3>Formularz transakcji</h3>
            <button onClick={handleFetchProducts}>Pobierz produkty</button>
            <button onClick={handleFetchTransactions}>Pobierz transakcje</button>

            <h4>Produkty:</h4>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <h4>Transakcje:</h4>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.description} - {transaction.amount} zł</li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionForm;
