const categories = [
    { name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Pasta", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Dessert", image: "https://images.unsplash.com/photo-1551024601-bec0273e8a9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
];

const restaurants = [
    {
        id: 1,
        name: "Burger King",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        cuisine: "American, Fast Food",
        deliveryTime: "30-40 min",
        priceForTwo: 25,
        promoted: true,
        tags: ["burger", "fast food", "american", "western", "lunch", "dinner", "best-items", "budget", "fast-delivery"]
    },
    {
        id: 2,
        name: "Pizza Hut",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        cuisine: "Italian, Pizza",
        deliveryTime: "40-50 min",
        priceForTwo: 30,
        promoted: false,
        tags: ["pizza", "italian", "western", "lunch", "dinner", "budget"]
    },
    {
        id: 3,
        name: "Sushi Place",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        cuisine: "Japanese, Sushi",
        deliveryTime: "50-60 min",
        priceForTwo: 50,
        promoted: true,
        tags: ["sushi", "japanese", "asian", "eastern", "dinner", "best-places"]
    },
    {
        id: 4,
        name: "Indian Curry House",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.6,
        cuisine: "Indian, Curry",
        deliveryTime: "35-45 min",
        priceForTwo: 40,
        promoted: false,
        tags: ["indian", "curry", "spicy", "eastern", "lunch", "dinner", "meals", "tiffins", "best-places"]
    },
    {
        id: 5,
        name: "Taco Bell",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 3.9,
        cuisine: "Mexican, Tacos",
        deliveryTime: "25-35 min",
        priceForTwo: 20,
        promoted: false,
        tags: ["mexican", "tacos", "fast food", "western", "lunch", "dinner", "budget", "fast-delivery"]
    },
    {
        id: 6,
        name: "Pasta Palace",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        cuisine: "Italian, Pasta",
        deliveryTime: "45-55 min",
        priceForTwo: 35,
        promoted: false,
        tags: ["italian", "pasta", "western", "dinner"]
    },
    {
        id: 7,
        name: "Madras Cafe",
        image: "https://images.unsplash.com/photo-1589301760014-d929645603f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.7,
        cuisine: "South Indian, Filter Coffee",
        deliveryTime: "15-25 min",
        priceForTwo: 15,
        promoted: true,
        tags: ["indian", "breakfast", "tiffins", "eastern", "best-places", "best-items", "budget", "fast-delivery", "south-indian"]
    },
    {
        id: 8,
        name: "Dosa Plaza",
        image: "https://images.unsplash.com/photo-1589301760014-d929645603f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Placeholder, ideally different
        rating: 4.6,
        cuisine: "100+ Dosa Varieties",
        deliveryTime: "30-45 min",
        priceForTwo: 20,
        promoted: false,
        tags: ["indian", "tiffins", "eastern", "lunch", "dinner", "south-indian"]
    },
    {
        id: 9,
        name: "Udipi Upahar",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        cuisine: "Pure Veg, South Indian",
        deliveryTime: "20-30 min",
        priceForTwo: 18,
        promoted: true,
        tags: ["indian", "tiffins", "eastern", "breakfast", "lunch", "best-places", "budget", "south-indian", "southern"]
    },
    {
        id: 10,
        name: "Frozen Fantasy",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.9,
        cuisine: "Ice Creams, Sundaes",
        deliveryTime: "15-20 min",
        priceForTwo: 15,
        promoted: false,
        tags: ["ice-creams", "dessert", "cool-drinks", "budget"]
    },
    {
        id: 11,
        name: "Chai Point",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        cuisine: "Tea, Coffee, Snacks",
        deliveryTime: "15-25 min",
        priceForTwo: 10,
        promoted: false,
        tags: ["tea-coffee", "cool-drinks", "snacks", "budget"]
    },
    {
        id: 12,
        name: "Paradise Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.7,
        cuisine: "Hyderabadi Biryani",
        deliveryTime: "30-45 min",
        priceForTwo: 35,
        promoted: true,
        tags: ["biryani", "special-biryanis", "dinner", "lunch", "southern"]
    },
    {
        id: 13,
        name: "Grandma's Pickles",
        image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        cuisine: "Homemade Pickles",
        deliveryTime: "2-3 days",
        priceForTwo: 12,
        promoted: false,
        tags: ["pickles", "home-made", "budget"]
    },
    {
        id: 14,
        name: "Soup Station",
        image: "https://images.unsplash.com/photo-1547592166-23acbe346499?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.4,
        cuisine: "Healthy Soups",
        deliveryTime: "20-30 min",
        priceForTwo: 20,
        promoted: false,
        tags: ["soups", "healthy", "dinner"]
    },
    {
        id: 15,
        name: "Punjabi Dhaba",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.6,
        cuisine: "North Indian, Tandoor",
        deliveryTime: "35-45 min",
        priceForTwo: 30,
        promoted: false,
        tags: ["northern", "dinner", "lunch", "meals"]
    },
    {
        id: 16,
        name: "Home Chef Lia",
        image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.9,
        cuisine: "Home Cooked Meals",
        deliveryTime: "45-60 min",
        priceForTwo: 25,
        promoted: true,
        tags: ["home-made", "meals", "dinner", "lunch"]
    },
    {
        id: 17,
        name: "Juice Junction",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        cuisine: "Fresh Juices, Shakes",
        deliveryTime: "15-20 min",
        priceForTwo: 10,
        promoted: false,
        tags: ["cool-drinks", "budget"]
    },
    {
        id: 18,
        name: "Snack Shack",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        cuisine: "Samosas, Kachoris",
        deliveryTime: "15-25 min",
        priceForTwo: 8,
        promoted: false,
        tags: ["snacks", "fast-foods", "budget"]
    },
    {
        id: 19,
        name: "The Bread Basket",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.6,
        cuisine: "Naans, Kulchas, Rotis",
        deliveryTime: "25-30 min",
        priceForTwo: 12,
        promoted: false,
        tags: ["breads", "northern", "dinner", "lunch"]
    },
    {
        id: 20,
        name: "Crispy Bites",
        image: "https://images.unsplash.com/photo-1626082927389-d31a55a82646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Chicken/Veg Starters
        rating: 4.7,
        cuisine: "Kebabs, Tikkas, Wings",
        deliveryTime: "20-25 min",
        priceForTwo: 18,
        promoted: true,
        tags: ["starters", "snacks", "dinner"]
    },
    {
        id: 21,
        name: "Charminar Royals",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        cuisine: "Authentic Hyderabadi Dum Biryani",
        deliveryTime: "30-40 min",
        priceForTwo: 30,
        promoted: true,
        tags: ["biryani", "special-biryanis", "dinner", "lunch", "southern", "halal"]
    },
    {
        id: 22,
        name: "Nawabs of Lucknow",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.6,
        cuisine: "Lucknowi & Awadhi Biryani",
        deliveryTime: "40-50 min",
        priceForTwo: 35,
        promoted: false,
        tags: ["biryani", "special-biryanis", "dinner", "northern"]
    },
    {
        id: 23,
        name: "Ambur Star Briyani",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        cuisine: "Spicy Ambur Seeraga Samba",
        deliveryTime: "25-35 min",
        priceForTwo: 20,
        promoted: false,
        tags: ["biryani", "special-biryanis", "lunch", "southern", "budget"]
    },
    {
        id: 24,
        name: "Kolkata Kathi & Biryani",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.7,
        cuisine: "Kolkata Style (with Potato)",
        deliveryTime: "35-45 min",
        priceForTwo: 22,
        promoted: false,
        tags: ["biryani", "special-biryanis", "dinner", "eastern"]
    },
    {
        id: 25,
        name: "Potful Claypot",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.4,
        cuisine: "Claypot Chicken Biryani",
        deliveryTime: "45-55 min",
        priceForTwo: 28,
        promoted: true,
        tags: ["biryani", "special-biryanis", "dinner"]
    },
    {
        id: 26,
        name: "Malabar Magic",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.9,
        cuisine: "Kerala Thalassery Biryani",
        deliveryTime: "30-40 min",
        priceForTwo: 25,
        promoted: false,
        tags: ["biryani", "special-biryanis", "south-indian"]
    },
    {
        id: 27,
        name: "Dindigul Thalappakatti",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", // Reuse distinct styling
        rating: 4.7,
        cuisine: "Dindigul Style Seeraga Samba",
        deliveryTime: "35-45 min",
        priceForTwo: 28,
        promoted: true,
        tags: ["biryani", "special-biryanis", "southern"]
    },
    {
        id: 28,
        name: "Bombay Brasserie",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.5,
        cuisine: "Bombay Style Irani Biryani",
        deliveryTime: "40-50 min",
        priceForTwo: 32,
        promoted: false,
        tags: ["biryani", "special-biryanis", "western", "dinner"]
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
    {
        id: 30,
        name: "Bhatkali Bistro",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.8,
        cuisine: "Coastal Bhatkali Biryani",
        deliveryTime: "40-50 min",
        priceForTwo: 30,
        promoted: false,
        tags: ["biryani", "special-biryanis", "southern", "seafood"]
    },
    {
        id: 101,
        name: "Spicy Biryani House",
        location: "Hyderabad",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        cuisine: "Hyderabadi Spices",
        deliveryTime: "25-30 min",
        priceForTwo: 18,
        promoted: true,
        tags: ["biryani", "spicy"]
    },
    {
        id: 102,
        name: "Italian Pizza Hub",
        location: "Vijayawada",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
        cuisine: "Wood-fired Pizza",
        deliveryTime: "30-35 min",
        priceForTwo: 22,
        promoted: false,
        tags: ["western", "pizza"]
    }
];

// Placeholder for broken images
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1476224488681-aba3553760b5?auto=format&fit=crop&w=800&q=80";

function handleImageError(img) {
    if (!img.dataset.triedFallback) {
        img.src = PLACEHOLDER_IMAGE;
        img.dataset.triedFallback = "true";
    }
}


// Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const restaurantGrid = document.getElementById('restaurantGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Categories
function renderCategories() {
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card">
            <img src="${cat.image}" alt="${cat.name}" class="category-img">
            <div class="category-name">${cat.name}</div>
        </div>
    `).join('');
}

// Render Restaurants
// Render Restaurants
function renderRestaurants(data) {
    restaurantGrid.innerHTML = data.map(res => `
        <a href="restaurant-detail.html?id=${res.id}" class="restaurant-card" style="text-decoration:none; color:inherit; display:block;">
            ${res.promoted ? '<span class="promoted-badge">Promoted</span>' : ''}
            <img src="${res.image}" alt="${res.name}" class="card-img" onerror="handleImageError(this)">
            <div class="card-content">
                <div class="card-header">
                    <h3 class="res-name">${res.name}</h3>
                    <div class="rating-badge">
                        ${res.rating} <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="cuisine-type">${res.cuisine}</div>
                <div class="location-badge" style="font-size: 0.8rem; color: #666; margin-bottom: 10px;">
                    <i class="fas fa-map-marker-alt"></i> ${res.location || 'New York'}
                </div>
                <div class="card-footer">
                    <span>${res.deliveryTime}</span>
                    <span>$${res.priceForTwo} for two</span>
                </div>
            </div>
        </a>
    `).join('');
}

// Filter Logic
function filterRestaurants(filterType) {
    let filteredData = [...restaurants];

    if (filterType === 'rating') {
        filteredData.sort((a, b) => b.rating - a.rating);
    } else if (filterType === 'delivery') {
        // Simple mock sort by parsing time, just assuming lower is better or filter by quick
        filteredData.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
    } else if (filterType === 'cost') {
        filteredData.sort((a, b) => a.priceForTwo - b.priceForTwo);
    }

    renderRestaurants(filteredData);

    // Update active button
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Search Logic
function searchRestaurants(query) {
    const lowerQuery = query.toLowerCase();
    const filteredData = restaurants.filter(res =>
        res.name.toLowerCase().includes(lowerQuery) ||
        res.cuisine.toLowerCase().includes(lowerQuery) ||
        res.tags.some(tag => tag.includes(lowerQuery))
    );
    renderRestaurants(filteredData);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderRestaurants(restaurants);
});

searchBtn.addEventListener('click', () => {
    searchRestaurants(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchRestaurants(searchInput.value);
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === 'all') {
            renderRestaurants(restaurants);
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            filterRestaurants(filter);
        }
    });
});

// Secondary Navigation Logic
const secNavLinks = document.querySelectorAll('.sec-nav-link');

secNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        secNavLinks.forEach(l => l.style.color = 'var(--light-text)');
        link.style.color = 'var(--primary-color)';

        const category = link.dataset.category;
        console.log("Filtering by category:", category);

        let filteredData = [];

        if (category === 'new-locations') {
            const modal = document.getElementById('locationModal');
            modal.classList.add('show');
            return;
        } else if (category === 'best-places') {
            window.location.href = 'best-places.html';
            return;
        } else {
            // Redirect all other categories to the dynamic showcase page
            window.location.href = `showcase.html?category=${category}`;
            return;
        }

        renderRestaurants(filteredData);
    });
});

// Modal Close Functions
const modal = document.getElementById('locationModal');
const closeModal = document.querySelector('.close-modal');

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Mock Voting Interactions
document.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', function () {
        if (!this.classList.contains('voted')) {
            const countSpan = this.querySelector('.vote-count');
            let count = parseInt(countSpan.textContent.replace(',', ''));
        }
    });
});

// Dark Mode Logic
const themeToggle = document.getElementById('themeToggle');
// ... (rest of dark mode logic is fine, just need to close the previous block)
// Actually, looking at the previous file content, the dark mode logic was pasted INSIDE the vote button event listener.
// I need to extract it out.

// Let's rewrite the end of the file correctly.
// Menu Database for Dynamic Menu Generation
const menuDatabase = {
    'biryani': [
        { name: "Chicken Dum Biryani", desc: "Aromatic basmati rice cooked with tender chicken.", price: 14 },
        { name: "Mutton Biryani", desc: "Rich and flavorful mutton with saffron rice.", price: 18 },
        { name: "Paneer Biryani", desc: "Vegetarian delight with marinated paneer cubes.", price: 12 },
        { name: "Mirchi Ka Salan", desc: "Spicy curry side dish for biryani.", price: 5 }
    ],
    'burger': [
        { name: "Classic Cheeseburger", desc: "Juicy patty with melted cheese and fresh veggies.", price: 10 },
        { name: "Crispy Chicken Burger", desc: "Fried chicken fillet with spicy mayo.", price: 11 },
        { name: "Veggie Supreme", desc: "Loaded vegetable patty with tangy sauce.", price: 9 },
        { name: "Fries & Drink Combo", desc: "Large fries + Coke.", price: 6 }
    ],
    'pizza': [
        { name: "Margherita", desc: "Classic tomato and mozzarella.", price: 10 },
        { name: "Pepperoni Feast", desc: "Loaded with spicy pepperoni slices.", price: 14 },
        { name: "Farmhouse Veg", desc: "Onions, peppers, mushrooms, and corn.", price: 12 },
        { name: "Garlic Breadsticks", desc: "Warm and cheesy breadsticks.", price: 5 }
    ],
    'south-indian': [
        { name: "Masala Dosa", desc: "Crispy fermented crepe with potato filling.", price: 8 },
        { name: "Idli Sambar", desc: "Steamed rice cakes with lentil soup.", price: 6 },
        { name: "Vada", desc: "Savory fried savory donuts.", price: 5 },
        { name: "Filter Coffee", desc: "Strong and frothy South Indian coffee.", price: 3 }
    ],
    'north-indian': [
        { name: "Butter Chicken", desc: "Creamy tomato curry with tender chicken.", price: 14 },
        { name: "Paneer Butter Masala", desc: "Rich gravy with cottage cheese.", price: 12 },
        { name: "Garlic Naan", desc: "Soft flatbread topped with garlic butter.", price: 3 },
        { name: "Dal Makhani", desc: "Slow-cooked black lentils in butter.", price: 10 }
    ],
    'dessert': [
        { name: "Chocolate Brownie", desc: "Warm fudge brownie with vanilla ice cream.", price: 8 },
        { name: "Gulab Jamun", desc: "Sweet milk solids soaked in syrup.", price: 6 },
        { name: "Fruit Salad", desc: "Fresh seasonal fruits.", price: 7 }
    ],
    'starters': [
        { name: "Chicken Tikka", desc: "Char-grilled marinated chicken chunks.", price: 12 },
        { name: "Paneer Tikka", desc: "Spicy grilled cottage cheese skewers.", price: 10 },
        { name: "Spring Rolls", desc: "Crispy rolls with vegetable filling.", price: 8 }
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
};

// Helper function to get menu based on tags
function getMenu(tags) {
    let menu = [];
    if (!tags) return menuDatabase['default'];

    tags.forEach(tag => {
        if (menuDatabase[tag]) {
            menu = [...menu, ...menuDatabase[tag]];
        }
    });

    // Remove duplicates
    menu = menu.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.name === item.name
        ))
    );

    return menu.length > 0 ? menu : menuDatabase['default'];
}

