// src/components/ProductCard.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "./ProductCard.css"; // CSS for styling individual product cards

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
      </Link>
      <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
