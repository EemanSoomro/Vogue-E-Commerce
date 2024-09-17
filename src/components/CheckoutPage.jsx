// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';


const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Fetch cart items from localStorage on initial render
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
    calculateTotal(storedItems); // calculate total for the order summary
  }, []);

  // Function to calculate total cost
  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalCost(total);
  };

  // Handle form input changes (shipping and payment info)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Submitted! Thank you for your purchase.');
    // Add logic to handle order submission (e.g., save order to backend)
  };

  return (
    <div className="checkout-page-container">
      <h1>Checkout Page</h1>

      {/* Shipping Form */}
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Shipping Details</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="Postal Code"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
          required
        />

        {/* Payment Information */}
        <h2>Payment Information</h2>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={formData.paymentMethod === 'creditCard'}
            onChange={handleInputChange}
          />{' '}
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="COD"
            checked={formData.paymentMethod === 'COD'}
            onChange={handleInputChange}
          />{' '}
          COD
        </label>

        {formData.paymentMethod === 'creditCard' && (
          <div>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              required
            />
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              placeholder="Expiration Date (MM/YY)"
              required
            />
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="CVV"
              required
            />
          </div>
        )}

        {/* Order Summary */}
        <h2>Order Summary</h2>
        <div className="order-summary">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <p>
                    {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                  </p>
                </div>
              ))}
              <p>Total: ${totalCost}</p>
            </div>
          )}
        </div>

        <button type="submit" className="submit-order-button">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
