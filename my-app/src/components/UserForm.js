import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Customer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users', { username, password, email, role });
            setUsername('');
            setPassword('');
            setEmail('');
            setRole('Customer');
            alert('User added successfully');
        } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dodaj Użytkownika</h3>
            <input
                type="text"
                placeholder="Nazwa Użytkownika"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Customer">Customer</option>
                <option value="Seller">Seller</option>
            </select>
            <button type="submit">Dodaj</button>
        </form>
    );
}

export default UserForm;
