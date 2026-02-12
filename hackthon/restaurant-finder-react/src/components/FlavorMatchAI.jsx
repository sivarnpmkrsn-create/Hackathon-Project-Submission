import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlavorMatchAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mood, setMood] = useState(null);
    const [recommendation, setRecommendation] = useState(null);

    const moods = [
        { label: 'Happy', icon: '😊', dish: 'Hyderabadi Dum Biryani', res: 'Charminar Royals' },
        { label: 'Spicy', icon: '🔥', dish: 'Sindhi Dum Biryani', res: 'Sindhi Darbar' },
        { label: 'Royal', icon: '👑', dish: 'Lucknowi Biryani', res: 'Nawabs of Lucknow' },
        { label: 'Snacky', icon: '🍟', dish: 'Classic Burger', res: 'Burger King' }
    ];

    const getRecommendation = (m) => {
        setMood(m);
        // Simulate "AI" thinking
        setTimeout(() => {
            setRecommendation(m);
        }, 1500);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '30px',
                    background: 'var(--title-gradient)',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: 'none',
                    boxShadow: '0 8px 30px rgba(255, 211, 42, 0.4)',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    zIndex: 900,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <i className="fas fa-magic"></i>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                        <motion.div
                            className="auth-modal"
                            onClick={e => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            style={{ maxWidth: '500px' }}
                        >
                            <h2 className="auth-title" style={{ color: 'var(--gold)' }}>FlavorMatch AI</h2>
                            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                                How are you feeling today? Let AI find your perfect meal.
                            </p>

                            {!recommendation ? (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                    {moods.map(m => (
                                        <button
                                            key={m.label}
                                            onClick={() => getRecommendation(m)}
                                            style={{
                                                padding: '20px',
                                                border: '2px solid #eee',
                                                borderRadius: '15px',
                                                background: mood?.label === m.label ? '#fff9e6' : 'white',
                                                cursor: 'pointer',
                                                transition: '0.3s'
                                            }}
                                        >
                                            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{m.icon}</div>
                                            <div style={{ fontWeight: 'bold' }}>{m.label}</div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '20px' }}>
                                    <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>AI Recommends:</div>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '10px' }}>{recommendation.dish}</h3>
                                    <p style={{ color: '#666', marginBottom: '20px' }}>From <strong>{recommendation.res}</strong></p>
                                    <button
                                        onClick={() => { setRecommendation(null); setMood(null); }}
                                        style={{ color: 'var(--primary-color)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                        Try another mood?
                                    </button>
                                </div>
                            )}

                            {mood && !recommendation && (
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <i className="fas fa-spinner fa-spin" style={{ color: 'var(--gold)', fontSize: '2rem' }}></i>
                                    <p style={{ marginTop: '10px' }}>Analyzing your hunger patterns...</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FlavorMatchAI;
