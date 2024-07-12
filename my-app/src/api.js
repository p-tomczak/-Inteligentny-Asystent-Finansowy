
const apiUrl = 'http://localhost:3000';

// Pobieranie produktów z API
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${apiUrl}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Dodawanie produktu do API
export const addProduct = async (product) => {
    try {
        const response = await fetch(`${apiUrl}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Usuwanie produktu z API
export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${apiUrl}/products/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete product');
        }

        console.log('Product deleted successfully!');
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

// Pobieranie transakcji z API
export const fetchTransactions = async () => {
    try {
        const response = await fetch(`${apiUrl}/transactions`);
        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

// Usuwanie transakcji z API
export const deleteTransaction = async (transactionId) => {
    try {
        const response = await fetch(`${apiUrl}/transactions/${transactionId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete transaction');
        }

        console.log('Transaction deleted successfully!');
    } catch (error) {
        console.error('Error deleting transaction:', error);
        throw error;
    }
};
