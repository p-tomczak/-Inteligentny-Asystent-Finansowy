import React, { useState, useEffect } from 'react';
import { fetchProducts, addProduct, deleteProduct } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const addedProduct = await addProduct(newProduct);
            console.log('Product added successfully:', addedProduct);

            // Update local product list after adding
            setProducts([...products, addedProduct]);

            // Optionally, reset the new product state
            setNewProduct({ name: '', price: 0 });

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            console.log('Product deleted successfully!');

            // Update local product list after deleting
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
                <input type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductList;
