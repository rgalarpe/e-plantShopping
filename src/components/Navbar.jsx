import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        🌿 Paradise Nursery
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="navbar-cart">
          <span role="img" aria-label="cart">🛒</span> Cart
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
