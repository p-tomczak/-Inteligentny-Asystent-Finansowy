import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

function App() {
    return (
        <div className="App">
            <h1>Inteligentny Asystent Finansowy</h1>
            <div className="container">
                <h2>Produkty</h2>
                <ProductForm />
                <ProductList />
            </div>
            <div className="container">
                <h2>Transakcje</h2>
                <TransactionForm />
                <TransactionList />
            </div>
        </div>
    );
}

export default App;
