import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Intelligent Financial Assistant for Online Stores</h1>
            </header>
            <main>
                <section>
                    <ProductList />
                    <ProductForm />
                </section>
                <section>
                    <OrderList />
                    <OrderForm />
                </section>
            </main>
        </div>
    );
}

export default App;
