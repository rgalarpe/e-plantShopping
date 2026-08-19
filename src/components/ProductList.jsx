import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';
import './ProductList.css';

// Plant catalog grouped into categories.
// Thumbnails use a placeholder image service so the app always renders,
// even without hosting real photo assets.
const plantCategories = [
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', cost: '$12.00' },
      { name: 'Rosemary', cost: '$9.50' },
      { name: 'Mint', cost: '$7.00' },
      { name: 'Basil', cost: '$6.50' },
      { name: 'Lemongrass', cost: '$8.00' },
      { name: 'Jasmine', cost: '$14.00' },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Aloe Vera', cost: '$10.00' },
      { name: 'Chamomile', cost: '$8.50' },
      { name: 'Echinacea', cost: '$9.00' },
      { name: 'Peppermint', cost: '$7.50' },
      { name: 'Calendula', cost: '$7.00' },
      { name: 'Ginger', cost: '$11.00' },
    ],
  },
  {
    category: 'Air-Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: '$18.00' },
      { name: 'Spider Plant', cost: '$13.00' },
      { name: 'Peace Lily', cost: '$16.50' },
      { name: 'Areca Palm', cost: '$22.00' },
      { name: 'Boston Fern', cost: '$15.00' },
      { name: 'Rubber Plant', cost: '$19.50' },
    ],
  },
];

const getImageUrl = (name, colorHex) =>
  `https://placehold.co/300x300/${colorHex}/ffffff?text=${encodeURIComponent(name)}`;

const categoryColors = {
  'Aromatic Plants': '6a994e',
  'Medicinal Plants': '386641',
  'Air-Purifying Plants': '1b4332',
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const isInCart = (name) =>
    cartItems.some((item) => item.name === name) || addedItems[name];

  const handleAddToCart = (plant, category) => {
    dispatch(
      addItem({
        name: plant.name,
        image: getImageUrl(plant.name, categoryColors[category]),
        cost: plant.cost,
      })
    );
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <Navbar />
      <div className="product-list-container">
        <h1>Our Plants</h1>
        {plantCategories.map((cat) => (
          <div key={cat.category} className="category-section">
            <h2>{cat.category}</h2>
            <div className="plant-grid">
              {cat.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img
                    src={getImageUrl(plant.name, categoryColors[cat.category])}
                    alt={plant.name}
                    className="plant-thumbnail"
                  />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">{plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isInCart(plant.name)}
                    onClick={() => handleAddToCart(plant, cat.category)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
