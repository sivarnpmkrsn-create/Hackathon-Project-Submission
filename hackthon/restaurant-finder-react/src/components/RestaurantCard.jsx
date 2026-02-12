import React from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = React.useState(restaurant.image);
    const placeholder = "https://images.unsplash.com/photo-1476224488681-aba3553760b5?auto=format&fit=crop&w=800&q=80";

    const handleError = () => {
        if (imgSrc !== placeholder) {
            setImgSrc(placeholder);
        }
    };

    return (
        <div
            className="restaurant-card"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
            }}
        >
            <div className="res-img-wrap" style={{ height: '180px', overflow: 'hidden' }}>
                <img
                    src={imgSrc}
                    alt={restaurant.name}
                    onError={handleError}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {restaurant.promoted && (
                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 12px', borderRadius: '5px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        PROMOTED
                    </span>
                )}
            </div>

            <div className="res-info" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary-color)' }}>{restaurant.name}</h3>
                    <span style={{
                        background: restaurant.rating >= 4.0 ? '#48bb78' : '#ecc94b',
                        color: 'white',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}>
                        <i className="fas fa-star" style={{ fontSize: '0.7rem' }}></i> {restaurant.rating}
                    </span>
                </div>

                <p style={{ color: '#747d8c', fontSize: '0.9rem', marginBottom: '5px' }}>{restaurant.cuisine}</p>
                <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)' }}></i> {restaurant.location || "Brooklyn, NY"}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', fontWeight: '500', color: '#2f3542', borderTop: '1px solid #f1f2f6', paddingTop: '15px' }}>
                    <span><i className="fas fa-clock" style={{ color: 'var(--primary-color)' }}></i> {restaurant.deliveryTime}</span>
                    <span><i className="fas fa-dollar-sign" style={{ color: 'var(--accent-color)' }}></i> ${restaurant.priceForTwo} FOR TWO</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
