import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#2f3542', color: 'white', padding: '60px 0 30px', marginTop: '60px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontFamily: 'Righteous', marginBottom: '20px', color: 'var(--primary-color)' }}>Best Restaurant Finder</h3>
                        <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Discover the best food and drinks in Brooklyn. Curated by experts for the ultimate dining experience.</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', lineHeight: 2 }}>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>About Us</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Browse Categories</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Best Places</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contact</h4>
                        <p style={{ opacity: 0.7, marginBottom: '10px' }}><i className="fas fa-envelope"></i> help@restfinder.com</p>
                        <p style={{ opacity: 0.7 }}><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                    <p>&copy; 2026 Best Restaurant Finder. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8rem', opacity: 0.4 }}>
                    Powered by FlavorFinders
                </div>
            </div>
        </footer>
    );
};

export default Footer;
