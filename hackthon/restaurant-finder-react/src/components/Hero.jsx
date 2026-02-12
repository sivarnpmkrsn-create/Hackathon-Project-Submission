import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <section className="hero" style={{
            height: '60vh',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', fontFamily: 'Righteous', marginBottom: '20px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
                    Find the Best Food in Brooklyn
                </h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
                    Explore curated restaurants and hidden gems.
                </p>

                <form onSubmit={handleSearch} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', background: 'white', padding: '10px', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                    <input
                        type="text"
                        placeholder="Search for restaurants, cuisines, dishes..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ flex: 1, border: 'none', padding: '0 20px', fontSize: '1.1rem', outline: 'none', color: '#333', borderRadius: '50px 0 0 50px' }}
                    />
                    <button type="submit" style={{ background: 'var(--primary-color)', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '50px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="fas fa-search"></i> Search
                    </button>
                </form>

                {/* FlavorFinders Badge */}
                <div style={{ marginTop: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.15)', padding: '10px 25px', borderRadius: '50px', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <i className="fas fa-bolt" style={{ color: 'var(--gold)' }}></i>
                    <span style={{ fontWeight: '600', letterSpacing: '1px' }}>FLAVORFINDERS VERIFIED</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
