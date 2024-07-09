import React, { useState } from 'react';
import { createTransaction } from '../api';

function TransactionForm() {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitPriceNet, setUnitPriceNet] = useState('');
    const [unitPriceGross, setUnitPriceGross] = useState('');
    const [storeId, setStoreId] = useState('');
    const [type, setType] = useState('Purchase');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTransaction({ productId, quantity, unitPriceNet, unitPriceGross, storeId, type, date: new Date() });
        setProductId('');
        setQuantity('');
        setUnitPriceNet('');
        setUnitPriceGross('');
        setStoreId('');
        setType('Purchase');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dodaj Transakcję</h3>
            <input
                type="number"
                placeholder="ID Produktu"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Ilość"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Cena Netto"
                value={unitPriceNet}
                onChange={(e) => setUnitPriceNet(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Cena Brutto"
                value={unitPriceGross}
                onChange={(e) => setUnitPriceGross(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="ID Sklepu"
                value={storeId}
                onChange={(e) => setStoreId(e.target.value)}
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Purchase">Zakup</option>
                <option value="Return">Zwrot</option>
            </select>
            <button type="submit">Dodaj</button>
        </form>
    );
}

export default TransactionForm;
