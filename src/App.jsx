import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import './App.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>
          Where Green Meets Serenity — bringing carefully grown, hand-picked
          houseplants straight to your door.
        </p>
        <button className="get-started-btn" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
