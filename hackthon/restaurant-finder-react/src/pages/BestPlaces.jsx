import React from 'react';
import { useRestaurants } from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';
import { motion } from 'framer-motion';

const BestPlaces = () => {
    const { restaurants } = useRestaurants();

    // Sort by rating and take top ones
    const bestRated = [...restaurants]
        .sort((a, b) => b.rating - a.rating);

    return (
        <div className="best-places-page">
            <div className="hero-compact" style={{
                padding: '80px 0',
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&w=1950&q=80) center/cover',
                color: 'white',
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{ fontSize: '3rem', fontFamily: 'Righteous', marginBottom: '15px' }}
                >
                    Elite Dining & Best Rated
                </motion.h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Discover the highest-rated flavors in your city.</p>
            </div>

            <div className="container" style={{ padding: '60px 0' }}>
                <div className="filters-label" style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-award" style={{ color: 'var(--gold)', fontSize: '1.5rem' }}></i>
                    <h2 style={{ margin: 0 }}>The 4.5+ Selection</h2>
                </div>

                <div className="restaurant-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '40px'
                }}>
                    {bestRated.filter(r => r.rating >= 4.5).map(res => (
                        <RestaurantCard key={res.id} restaurant={res} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestPlaces;
