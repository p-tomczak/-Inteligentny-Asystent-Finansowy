const BASE_URL = 'http://localhost:3000/api';

const api = {
    fetchProducts: async () => {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },

    fetchTransactions: async () => {
        const response = await fetch(`${BASE_URL}/transactions`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },

    createTransaction: async (transactionData) => {
        const response = await fetch(`${BASE_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },

    createUser: async (userData) => {
        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
};

export default api;
