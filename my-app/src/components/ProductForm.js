import React, { useState } from 'react';
import { fetchProducts } from '../api';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [priceNet, setPriceNet] = useState('');
    const [priceGross, setPriceGross] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!name || !priceNet || !priceGross) {
            alert("Wszystkie pola są wymagane!");
            return;
        }


        const newProduct = {
            name,
            priceNet,
            priceGross
        };

        try {
            await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            // Reset form fields
            setName('');
            setPriceNet('');
            setPriceGross('');
            // Optionally fetch products again to update the list
            fetchProducts();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nazwa produktu:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="priceNet">Cena netto:</label>
                <input
                    type="text"
                    id="priceNet"
                    value={priceNet}
                    onChange={(e) => setPriceNet(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="priceGross">Cena brutto:</label>
                <input
                    type="text"
                    id="priceGross"
                    value={priceGross}
                    onChange={(e) => setPriceGross(e.target.value)}
                />
            </div>
            <button type="submit">Dodaj produkt</button>
        </form>
    );
};

export default ProductForm;
