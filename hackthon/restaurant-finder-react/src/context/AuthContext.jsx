import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

    // Persist user on refresh
    useEffect(() => {
        const savedUser = localStorage.getItem('ff_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('ff_user', JSON.stringify(userData));
        setIsAuthModalOpen(false);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('ff_user');
    };

    const openAuthModal = (mode = 'login') => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isAuthModalOpen,
            openAuthModal,
            closeAuthModal,
            authMode,
            setAuthMode
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
