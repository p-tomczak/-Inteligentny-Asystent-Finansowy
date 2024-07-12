import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { deleteTransaction } from './api';

function App() {
    const handleDeleteTransaction = async (transactionId) => {
        try {
            await deleteTransaction(transactionId);
        } catch (error) {
            console.error(`Error deleting transaction ${transactionId}:`, error);
        }
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Inteligentny Asystent Finansowy</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Strona Główna</Link></li>
                            <li><Link to="/products">Produkty</Link></li>
                            <li><Link to="/transactions">Transakcje</Link></li>
                            <li><Link to="/login">Logowanie</Link></li>
                            <li><Link to="/register">Rejestracja</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
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
                            <TransactionList handleDelete={handleDeleteTransaction} />
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
