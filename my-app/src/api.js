import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const getProducts = () => api.get('/Products');
export const getProduct = (id) => api.get(`/Products/${id}`);
export const createProduct = (product) => api.post('/Products', product);
export const updateProduct = (id, product) => api.put(`/Products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/Products/${id}`);

export const getTransactions = () => api.get('/Transactions');
export const getTransaction = (id) => api.get(`/Transactions/${id}`);
export const createTransaction = (transaction) => api.post('/Transactions', transaction);
export const updateTransaction = (id, transaction) => api.put(`/Transactions/${id}`, transaction);
export const deleteTransaction = (id) => api.delete(`/Transactions/${id}`);
