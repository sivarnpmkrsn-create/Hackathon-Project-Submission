import React, { useState } from 'react';
import { useRestaurants } from '../context/RestaurantContext';
import { motion, AnimatePresence } from 'framer-motion';
import CartModal from './CartModal';

const FloatingCart = () => {
    const { cart } = useRestaurants();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (cart.length === 0) return null;

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => setIsModalOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        background: 'var(--primary-color)',
                        color: 'white',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        boxShadow: '0 8px 30px rgba(255, 71, 87, 0.4)',
                        cursor: 'pointer',
                        zIndex: 1000,
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}
                >
                    <i className="fas fa-shopping-basket" style={{ fontSize: '1.2rem' }}></i>
                    <span>{cart.length} Item{cart.length > 1 ? 's' : ''} | View Cart</span>
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', marginLeft: '5px' }}>
                        ${cart.reduce((total, item) => total + item.price, 0)}
                    </div>
                </motion.div>
            </AnimatePresence>

            <CartModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cart={cart}
            />
        </>
    );
};

export default FloatingCart;
