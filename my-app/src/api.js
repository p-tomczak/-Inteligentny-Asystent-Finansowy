const BASE_URL = "http://localhost:3000";

const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

const fetchTransactions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/transactions`);
        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export default {
    fetchProducts,
    fetchTransactions
};