import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import Navbar from './Navbar';
import './CartItem.css';

// Turns a "$12.00" style string into a number for math.
const parseCost = (cost) => parseFloat(cost.replace('$', ''));

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateItemTotal = (item) =>
    (parseCost(item.cost) * item.quantity).toFixed(2);

  const calculateTotalAmount = () =>
    cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Checkout is coming soon!');
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty. Head over to the plants page to add some green
            to your life!
          </p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-cost">Unit price: {item.cost}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <p className="cart-item-total-cost">
                    Total: ${calculateItemTotal(item)}
                  </p>
                  <button className="delete-btn" onClick={() => handleDelete(item)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
