import React, { useState } from 'react';
import './SigninPage.css';
import logo from '../../assets/logo.png';
import { loginApi } from '../../apis/Auth.apis';
import { useNavigate } from 'react-router-dom';


const SigninPage = () => {
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        if (username.trim() === '') {
            alert('Username cannot be empty');
            return;
        }

        try {
            const response = await loginApi(username);
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            navigate('/')
            console.log('Login success:', response.data);
        } catch (err) {
            console.error('Login error:', err);
            alert('Login failed');
        }
    };

    return (
        <div className="signin-wrapper">
            <img src={logo} alt="Logo" className="signin-logo" />

            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SigninPage;
