import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { AuthProvider } from './context/AuthContext'
import { RestaurantProvider } from './context/RestaurantContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RestaurantProvider>
                <App />
            </RestaurantProvider>
        </AuthProvider>
    </React.StrictMode>,
)
