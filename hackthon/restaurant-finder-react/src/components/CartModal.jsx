import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartModal = ({ isOpen, onClose, cart }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="modal-overlay" onClick={onClose}>
                <motion.div
                    className="auth-modal"
                    onClick={e => e.stopPropagation()}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    style={{
                        position: 'fixed',
                        right: '0',
                        top: '0',
                        height: '100vh',
                        borderRadius: '0',
                        maxWidth: '450px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                        <h2 className="auth-title" style={{ margin: 0 }}>My Basket</h2>
                        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {cart.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <i className="fas fa-shopping-basket" style={{ fontSize: '3rem', color: '#eee', marginBottom: '15px' }}></i>
                                <p>Your basket is empty.</p>
                            </div>
                        ) : (
                            cart.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #eee' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc?.substring(0, 40)}...</div>
                                    </div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>${item.price}</div>
                                </div>
                            ))
                        )}
                    </div>

                    {cart.length > 0 && (
                        <div style={{ marginTop: 'auto', borderTop: '2px solid #eee', paddingTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span>Subtotal</span>
                                <span>${cart.reduce((t, i) => t + i.price, 0)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <span>Total</span>
                                <span>${cart.reduce((t, i) => t + i.price, 0)}</span>
                            </div>
                            <button className="auth-btn">Checkout</button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CartModal;
