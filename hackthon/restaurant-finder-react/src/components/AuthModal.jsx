import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const AuthModal = () => {
    const { isAuthModalOpen, closeAuthModal, authMode, setAuthMode, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    if (!isAuthModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Simulate a delay for submission feedback
        setTimeout(() => {
            login({ name: name || email.split('@')[0], email, phone });
            setSubmitted(false);
        }, 2000);
    };

    return (
        <AnimatePresence>
            <div className="modal-overlay" onClick={closeAuthModal}>
                <motion.div
                    className="auth-modal"
                    onClick={e => e.stopPropagation()}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    style={{ textAlign: 'center' }}
                >
                    <button
                        style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666' }}
                        onClick={closeAuthModal}
                    >
                        &times;
                    </button>

                    {submitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ padding: '40px 0' }}
                        >
                            <div style={{ fontSize: '4rem', color: 'var(--accent-color)', marginBottom: '20px' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h2 style={{ fontFamily: 'Righteous', color: 'var(--secondary-color)', marginBottom: '10px' }}>Submitted Successfully!</h2>
                            <p style={{ color: '#666' }}>Welcome to the family. Redirecting you to the feast...</p>
                        </motion.div>
                    ) : (
                        <>
                            <h2 className="auth-title">
                                {authMode === 'login' ? 'Member Login' : 'Create Account'}
                            </h2>
                            <p style={{ marginBottom: '25px', color: '#666', fontSize: '0.9rem' }}>
                                {authMode === 'login' ? 'Access your gourmet profile.' : 'Fill in your details to get started.'}
                            </p>

                            <form className="auth-form" onSubmit={handleSubmit}>
                                {authMode === 'signup' && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </>
                                )}
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button type="submit" className="auth-btn" style={{ marginTop: '10px' }}>
                                    {authMode === 'login' ? 'Sign In' : 'Register Now'}
                                </button>
                            </form>

                            <div className="auth-switch">
                                {authMode === 'login' ? (
                                    <>New here? <span onClick={() => setAuthMode('signup')}>Create an account</span></>
                                ) : (
                                    <>Already a member? <span onClick={() => setAuthMode('login')}>Sign In</span></>
                                )}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AuthModal;
