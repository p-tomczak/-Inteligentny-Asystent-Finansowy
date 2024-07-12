import React, { useState } from 'react';
import api from './api';

const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            username,
            email,
        };

        try {
            await api.createUser(userData);

            setUsername('');
            setEmail('');
        } catch (error) {
            console.error('User creation error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Stwórz użytkownika</h2>
            <div>
                <label>Nazwa użytkownika:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Stwórz użytkownika</button>
        </form>
    );
};

export default UserForm;
