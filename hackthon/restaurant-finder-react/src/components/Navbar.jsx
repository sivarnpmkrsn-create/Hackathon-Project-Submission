import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="navbar" style={{ background: '#e63946', color: 'white' }}>
            <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0' }}>
                <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                    <h2 style={{ fontFamily: 'Righteous', margin: 0 }}>🍽 Restaurant Finder</h2>
                </Link>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className="nav-search" style={{ position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search restaurant..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                            style={{
                                padding: '8px 15px',
                                borderRadius: '5px',
                                border: 'none',
                                outline: 'none',
                                fontSize: '0.9rem',
                                width: '250px'
                            }}
                        />
                    </div>

                    <ThemeToggle />

                    <div className="auth-buttons" style={{ display: 'flex', gap: '10px' }}>
                        {user ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ fontWeight: '500' }}>Hi, {user.name}</span>
                                <button onClick={logout} style={{ background: 'white', border: 'none', color: '#e63946', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
                            </div>
                        ) : (
                            <Link
                                to="/register"
                                className="signin-btn"
                                style={{ background: 'white', color: '#e63946', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="secondary-nav" style={{ background: 'white', borderBottom: '1px solid #efeff4' }}>
                <div className="container" style={{ display: 'flex', gap: '30px', padding: '10px 0', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <Link to="/best-places" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem', fontWeight: '500', transition: '0.3s' }}>
                        <i className="fas fa-award" style={{ color: 'var(--gold)', marginRight: '5px' }}></i> Best Places
                    </Link>
                    <Link to="/showcase?category=biryani" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Biryanis</Link>
                    <Link to="/showcase?category=western" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Pizzas & Burgers</Link>
                    <Link to="/showcase?category=sindhi-special" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>Sindhi Special</Link>
                    <span style={{ color: '#ccc' }}>|</span>
                    <span style={{ color: '#999', fontSize: '0.9rem', cursor: 'pointer' }} onClick={() => alert("Voting for new locations opening soon!")}>
                        <i className="fas fa-map-marker-alt"></i> New Locations
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
