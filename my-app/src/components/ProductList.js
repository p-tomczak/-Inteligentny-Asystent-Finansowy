import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.productId !== id));
    };

    return (
        <div>
            <h3>Lista Produktów</h3>
            <ul>
                {products.map(product => (
                    <li key={product.productId}>
                        {product.name} - {product.description} - Netto: {product.priceNet} - Brutto: {product.priceGross}
                        <button onClick={() => handleDelete(product.productId)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
