// src/pages/ProductDetails.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/productsData'; // Ensure correct import path
import './ProductDetails.css'; // Add styling for this page

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
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

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          
          <div className="product-variations">
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">Select Size</option>
              <option value="S">16</option>
              <option value="M">18</option>
              <option value="L">20</option>
              <option value="XL">22</option>
            </select>

            <label htmlFor="color">Color:</label>
            <select
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="Red">Silver</option>
              <option value="Blue">Golden</option>
            </select>
          </div>

          <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-list">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <div className="related-product" key={relatedProduct.id}>
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <p>{relatedProduct.name}</p>
                <p>${relatedProduct.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
