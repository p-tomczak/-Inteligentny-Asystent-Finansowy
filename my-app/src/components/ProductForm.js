import React, { useState } from 'react';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const productData = {
            name: productName,
            price: productPrice,
        };

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            setProductName('');
            setProductPrice('');
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Dodaj produkt</h2>
            <div>
                <label>Nazwa produktu:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cena:</label>
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Dodaj produkt</button>
        </form>
    );
};

export default ProductForm;
