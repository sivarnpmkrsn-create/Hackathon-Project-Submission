import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useRestaurants } from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';

const showcaseConfigs = {
    'biryani': {
        title: "The Biryani King",
        desc: "Authentic Dum Biryanis from across India.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        gradient: "linear-gradient(45deg, #f0932b, #ffbe76)", // Royal Orange
        tags: ['biryani', 'special-biryanis']
    },
    'sindhi-special': {
        title: "Sindhi Delicacies",
        desc: "Traditional non-veg and seafood feasts.",
        image: "https://images.unsplash.com/photo-1589301760014-d929645603f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        gradient: "linear-gradient(45deg, #eb4d4b, #ff7979)", // Spicy Red
        tags: ['sindhi-special']
    },
    'western': {
        title: "Global Flavors",
        desc: "Burgers, Pizzas, and more.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        gradient: "linear-gradient(45deg, #0984e3, #74b9ff)", // Cool Blue
        tags: ['western', 'burger', 'pizza']
    }
};

const Showcase = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const category = searchParams.get('category') || 'biryani';
    const config = showcaseConfigs[category] || showcaseConfigs['biryani'];
    const { restaurants } = useRestaurants();

    const filtered = restaurants.filter(res =>
        res.tags.some(tag => config.tags.includes(tag))
    );

    return (
        <div className="showcase-page">
            <div className="showcase-hero" style={{
                height: '40vh',
                background: config.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '3rem', fontFamily: 'Righteous', marginBottom: '10px' }}>{config.title}</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{config.desc}</p>
                    <button
                        onClick={() => navigate('/')}
                        style={{ marginTop: '20px', background: 'white', color: 'black', border: 'none', padding: '10px 25px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        &larr; Back to Home
                    </button>
                </div>
                {/* Subtle Image Overlay */}
                <div style={{ position: 'absolute', right: '-10%', top: '0', height: '100%', width: '60%', background: `url(${config.image}) center/cover no-repeat`, opacity: 0.2, transform: 'skewX(-15deg)' }}></div>
            </div>

            <div className="container" style={{ padding: '60px 0' }}>
                <div className="restaurant-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {filtered.map(res => (
                        <RestaurantCard key={res.id} restaurant={res} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Showcase;
