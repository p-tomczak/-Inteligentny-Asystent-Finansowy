import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Inteligentny Asystent Finansowy</h1>
                <Routes>
                    <Route path="/" element={<h2>Witaj w Inteligentnym Asystencie Finansowym!</h2>} />
                    <Route path="/products" element={
                        <div className="container">
                            <h2>Produkty</h2>
                            <ProductForm />
                            <ProductList />
                        </div>
                    } />
                    <Route path="/transactions" element={
                        <div className="container">
                            <h2>Transakcje</h2>
                            <TransactionForm />
                            <TransactionList />
                        </div>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
