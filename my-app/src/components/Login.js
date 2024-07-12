import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proste sprawdzanie poprawności
        if (!email || !password) {
            setError('Proszę wypełnić wszystkie pola.');
            return;
        }

        setError('');


        console.log('Logging in', { email, password, rememberMe });
    };

    return (
        <div>
            <h2>Logowanie</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Zapamiętaj mnie
                    </label>
                </div>
                <button type="submit">Zaloguj się</button>
            </form>
        </div>
    );
};

export default Login;
