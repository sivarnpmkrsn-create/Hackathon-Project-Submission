import React from 'react';
import { useSearchParams } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import { useRestaurants } from '../context/RestaurantContext';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { restaurants } = useRestaurants();

    const filteredRestaurants = restaurants.filter(res => {
        return res.name.toLowerCase().includes(query.toLowerCase()) ||
            res.cuisine.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <div className="search-page" style={{ padding: '40px 0', minHeight: '80vh' }}>
            <div className="container">
                <div style={{ marginBottom: '40px', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)' }}>
                        Search Results
                    </h1>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>
                        Showing results for <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>"{query}"</span>
                    </p>
                </div>

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
                            <i className="fas fa-search-minus" style={{ fontSize: '4rem', color: '#ddd', marginBottom: '20px' }}></i>
                            <h2>No restaurants found matching your search.</h2>
                            <p style={{ color: '#666' }}>Try adjusting your keywords or browse popular categories.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
