import React, { useState } from 'react';
import Hero from '../components/Hero';
import RestaurantCard from '../components/RestaurantCard';
import { useRestaurants } from '../context/RestaurantContext';

const Home = () => {
    const { restaurants } = useRestaurants();
    const [filter, setFilter] = useState('all');

    const filteredRestaurants = restaurants.filter(res => {
        if (filter === 'top-rated') return res.rating >= 4.5;
        if (filter === 'fast') return parseInt(res.deliveryTime) <= 35;
        if (filter === 'budget') return res.priceForTwo <= 25;
        return true;
    });

    return (
        <div className="home-page">
            <Hero />

            <div className="container">
                {/* Filters */}
                <div className="filters-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'Righteous', color: '#2d3436' }}>
                        Explore Restaurants
                    </h2>

                    <div className="filter-btns" style={{ display: 'flex', gap: '10px' }}>
                        <button
                            onClick={() => setFilter('all')}
                            style={{ padding: '8px 20px', borderRadius: '30px', border: '1px solid #ddd', background: filter === 'all' ? 'var(--secondary-color)' : 'white', color: filter === 'all' ? 'white' : '#666', cursor: 'pointer', fontWeight: '500' }}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('top-rated')}
                            style={{ padding: '8px 20px', borderRadius: '30px', border: '1px solid #ddd', background: filter === 'top-rated' ? 'var(--secondary-color)' : 'white', color: filter === 'top-rated' ? 'white' : '#666', cursor: 'pointer', fontWeight: '500' }}
                        >
                            Top Rated
                        </button>
                        <button
                            onClick={() => setFilter('fast')}
                            style={{ padding: '8px 20px', borderRadius: '30px', border: '1px solid #ddd', background: filter === 'fast' ? 'var(--secondary-color)' : 'white', color: filter === 'fast' ? 'white' : '#666', cursor: 'pointer', fontWeight: '500' }}
                        >
                            Fast Delivery
                        </button>
                    </div>
                </div>

                {/* Restaurant Grid */}
                <div className="restaurant-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map(res => (
                            <RestaurantCard key={res.id} restaurant={res} />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '100px 0', gridColumn: '1 / -1' }}>
                            <i className="fas fa-search" style={{ fontSize: '3rem', color: '#ddd', marginBottom: '20px' }}></i>
                            <h3>No restaurants found matching your criteria.</h3>
                            <button onClick={() => { setSearchQuery(''); setFilter('all'); }} style={{ marginTop: '20px', color: 'var(--primary-color)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
