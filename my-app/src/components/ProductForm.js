import React, { useState } from 'react';
import { createProduct } from '../api';

function ProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priceNet, setPriceNet] = useState('');
    const [priceGross, setPriceGross] = useState('');
    const [storeId, setStoreId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct({ name, description, priceNet, priceGross, storeId });
        setName('');
        setDescription('');
        setPriceNet('');
        setPriceGross('');
        setStoreId('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dodaj Produkt</h3>
            <input
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Opis"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Cena Netto"
                value={priceNet}
                onChange={(e) => setPriceNet(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Cena Brutto"
                value={priceGross}
                onChange={(e) => setPriceGross(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="ID Sklepu"
                value={storeId}
                onChange={(e) => setStoreId(e.target.value)}
                required
            />
            <button type="submit">Dodaj</button>
        </form>
    );
}

export default ProductForm;
