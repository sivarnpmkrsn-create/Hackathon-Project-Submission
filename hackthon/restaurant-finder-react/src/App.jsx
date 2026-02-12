import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import RestaurantDetail from './pages/RestaurantDetail';
import SearchPage from './pages/SearchPage';
import Register from './pages/Register';
import BestPlaces from './pages/BestPlaces';
import FloatingCart from './components/FloatingCart';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/showcase" element={<Showcase />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/best-places" element={<BestPlaces />} />
                        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                    </Routes>
                </main>
                <Footer />

                {/* Persistent/Floating Features */}
                <FloatingCart />
                <FlavorMatchAI />
                <AuthModal />
            </div>
        </Router>
    );
}

export default App;
