import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setTimeout(() => {
            login({ name, email });
            navigate('/');
        }, 2000);
    };

    return (
        <div className="form-section" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px 0' }}>
            <motion.div
                className="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '15px',
                    width: '100%',
                    maxWidth: '400px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}
            >
                {submitted ? (
                    <div style={{ padding: '20px 0' }}>
                        <div style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '20px' }}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2 style={{ fontFamily: 'Righteous', marginBottom: '10px' }}>Registration Successful!</h2>
                        <p style={{ color: '#666' }}>Taking you to the food...</p>
                    </div>
                ) : (
                    <>
                        <h2 style={{ fontFamily: 'Righteous', fontSize: '2rem', marginBottom: '30px', color: 'var(--primary-color)' }}>Registration Form</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '12px',
                                    background: 'var(--primary-color)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    marginTop: '10px'
                                }}
                            >
                                Register
                            </button>
                        </form>
                        <p style={{ marginTop: '20px' }}>
                            <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>Back to Home</Link>
                        </p>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default Register;
