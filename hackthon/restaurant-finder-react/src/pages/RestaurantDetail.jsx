import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRestaurants } from '../context/RestaurantContext';

const RestaurantDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { restaurants, menuDatabase, addToCart } = useRestaurants();
    const [activeTab, setActiveTab] = useState('Menu');

    const res = restaurants.find(r => r.id === parseInt(id));

    if (!res) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Restaurant Not Found</h1>
                <button onClick={() => navigate('/')} style={{ marginTop: '20px', background: 'var(--primary-color)', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '30px', cursor: 'pointer' }}>
                    Go Home
                </button>
            </div>
        );
    }

    // Dynamic Menu Logic
    const getMenu = (tags) => {
        let items = [];
        tags.forEach(tag => {
            if (menuDatabase[tag]) items = [...items, ...menuDatabase[tag]];
        });
        // Remove duplicates
        items = items.filter((item, index, self) =>
            index === self.findIndex((t) => t.name === item.name)
        );
        return items.length > 0 ? items : menuDatabase['default'];
    };

    const menuItems = getMenu(res.tags);
    const recommended = menuItems.slice(0, 2);
    const mains = menuItems.slice(2);

    return (
        <div className="detail-page" style={{ paddingBottom: '100px' }}>
            {/* Hero Overlay */}
            <div className="res-hero" style={{
                height: '50vh',
                background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${res.image}) center/cover`,
                display: 'flex',
                alignItems: 'flex-end',
                color: 'white',
                paddingBottom: '40px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontFamily: 'Righteous', marginBottom: '10px' }}>{res.name}</h1>
                    <div style={{ display: 'flex', gap: '20px', opacity: 0.9, fontSize: '1.1rem' }}>
                        <span><i className="fas fa-utensils"></i> {res.cuisine}</span>
                        <span><i className="fas fa-star" style={{ color: 'gold' }}></i> {res.rating}</span>
                        <span><i className="fas fa-clock"></i> {res.deliveryTime}</span>
                        <span><i className="fas fa-dollar-sign"></i> ${res.priceForTwo} for two</span>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '30px' }}>
                {/* Tabs */}
                <div style={{ borderBottom: '2px solid #eee', marginBottom: '30px', display: 'flex' }}>
                    {['Menu', 'Reviews', 'Info'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                position: 'relative',
                                color: activeTab === tab ? 'var(--primary-color)' : '#747d8c'
                            }}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', height: '3px', background: 'var(--primary-color)' }}></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="tab-content">
                    {activeTab === 'Menu' && (
                        <div id="menu-section">
                            <div style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '15px' }}>Recommended</h3>
                                {recommended.map(item => (
                                    <MenuItem key={item.name} item={item} onAdd={() => addToCart(item)} />
                                ))}
                            </div>
                            {mains.length > 0 && (
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', borderLeft: '4px solid var(--primary-color)', paddingLeft: '15px' }}>Mains & More</h3>
                                    {mains.map(item => (
                                        <MenuItem key={item.name} item={item} onAdd={() => addToCart(item)} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'Reviews' && (
                        <div style={{ maxWidth: '700px' }}>
                            <div className="review-card" style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <strong>John Doe</strong>
                                    <span style={{ color: 'gold' }}><i className="fas fa-star"></i> 5.0</span>
                                </div>
                                <p style={{ color: '#666' }}>"Absolutely incredible experience. The flavors were authentic and the service was lightning fast!"</p>
                            </div>
                            <div className="review-card" style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <strong>Jane Smith</strong>
                                    <span style={{ color: 'gold' }}><i className="fas fa-star"></i> 4.5</span>
                                </div>
                                <p style={{ color: '#666' }}>"Great value for money. Highly recommend the {recommended[0]?.name}!"</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Info' && (
                        <div style={{ lineHeight: '1.8', color: '#444' }}>
                            <p><strong><i className="fas fa-map-marker-alt"></i> Address:</strong> 123 Foodie Blvd, Brooklyn, NY 11201</p>
                            <p><strong><i className="fas fa-phone"></i> Contact:</strong> +1 (555) 000-1111</p>
                            <p><strong><i className="fas fa-clock"></i> Hours:</strong> 11:00 AM - 10:00 PM</p>
                            <p><strong><i className="fas fa-info-circle"></i> Cuisine:</strong> {res.cuisine}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ item, onAdd }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        marginBottom: '15px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
        <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.name}</h4>
            <p style={{ color: '#747d8c', fontSize: '0.9rem' }}>{item.desc}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>${item.price}</span>
            <button
                onClick={onAdd}
                style={{ background: 'white', border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
                onMouseOver={(e) => { e.target.style.background = 'var(--primary-color)'; e.target.style.color = 'white' }}
                onMouseOut={(e) => { e.target.style.background = 'white'; e.target.style.color = 'var(--primary-color)' }}
            >
                Add
            </button>
        </div>
    </div>
);

export default RestaurantDetail;
