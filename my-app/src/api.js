const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }
    return await response.json();
};

export const fetchTransactions = async () => {
    const response = await fetch(`${API_URL}/transactions`);
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }
    return await response.json();
};

export const createProduct = async (product) => {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }
    return await response.json();
};

export const createTransaction = async (transaction) => {
    const response = await fetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
    }
    return await response.json();
};

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
