import React, { createContext, useContext, useState } from 'react';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [restaurants] = useState([
        {
            id: 101,
            name: "Spicy Biryani House",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            cuisine: "Hyderabadi Spices",
            location: "Hyderabad",
            deliveryTime: "25-30 min",
            priceForTwo: 18,
            promoted: true,
            tags: ["biryani", "spicy"]
        },
        {
            id: 102,
            name: "Italian Pizza Hub",
            image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
            rating: 4.5,
            cuisine: "Wood-fired Pizza",
            location: "Vijayawada",
            deliveryTime: "30-35 min",
            priceForTwo: 22,
            promoted: false,
            tags: ["western", "pizza"]
        },
        {
            id: 1,
            name: "Charminar Royals",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.9,
            cuisine: "Hyderabadi Dum Biryani",
            deliveryTime: "30-40 min",
            priceForTwo: 25,
            promoted: true,
            tags: ["biryani", "special-biryanis", "southern", "spicy"]
        },
        {
            id: 2,
            name: "Nawabs of Lucknow",
            image: "https://images.unsplash.com/photo-1589301760014-d929645603f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.8,
            cuisine: "Lucknowi/Awadhi Biryani",
            deliveryTime: "40-50 min",
            priceForTwo: 30,
            promoted: false,
            tags: ["biryani", "special-biryanis", "northern"]
        },
        {
            id: 29,
            name: "Sindhi Darbar",
            image: "https://images.unsplash.com/photo-1589301760014-d929645603f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            rating: 4.6,
            cuisine: "Spicy Sindhi Biryani",
            deliveryTime: "30-45 min",
            priceForTwo: 24,
            promoted: false,
            tags: ["sindhi-special", "biryani", "special-biryanis", "northern", "spicy"]
        },
        // ... Additional restaurants can be added here
    ]);

    const [menuDatabase] = useState({
        'biryani': [
            { name: "Chicken Dum Biryani", desc: "Aromatic basmati rice cooked with tender chicken.", price: 14 },
            { name: "Mutton Biryani", desc: "Rich and flavorful mutton with saffron rice.", price: 18 },
            { name: "Paneer Biryani", desc: "Vegetarian delight with marinated paneer cubes.", price: 12 },
            { name: "Mirchi Ka Salan", desc: "Spicy curry side dish for biryani.", price: 5 }
        ],
        'sindhi-special': [
            { name: "Sindhi Dum Biryani", desc: "Special Dum Biryani with authentic spices.", price: 16 },
            { name: "Prawns Masala", desc: "Juicy prawns cooked in spicy gravy.", price: 18 },
            { name: "Spicy Fish Curry", desc: "Traditional fish curry.", price: 15 },
            { name: "Crab Roast", desc: "Fresh crab roasted with spices.", price: 20 },
            { name: "Mutton Curry", desc: "Tender mutton chunks in thick gravy.", price: 19 },
            { name: "Crispy Fish Fry", desc: "Deep fried fish slices.", price: 14 },
            { name: "Chicken Fry", desc: "Spicy dry chicken fry.", price: 12 }
        ],
        'default': [
            { name: "Chef's Special", desc: "Ask us about the special of the day!", price: 15 },
            { name: "Classic Combo", desc: "Main course + Drink.", price: 12 }
        ]
    });

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <RestaurantContext.Provider value={{ restaurants, menuDatabase, cart, addToCart }}>
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurants = () => useContext(RestaurantContext);
