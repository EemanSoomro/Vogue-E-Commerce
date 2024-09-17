import React, { useState } from 'react';
import './FeaturedProducts.css';

// Importing images from assets
import product1 from '../assets/Product1.png';
import product2 from '../assets/Product2.png';
import product3 from '../assets/Product3.png';
import product4 from '../assets/Product4.png';
import product5 from '../assets/Product5.png';
import product6 from '../assets/Product6.png';
import product7 from '../assets/Product7.png';
import product8 from '../assets/Product8.png';

const products = [
  { id: 1, imgSrc: product1, name: 'Beaded Leaf Charm Necklace', price: '$8.00' },
  { id: 2, imgSrc: product2, name: 'Antique Earings', price: '$5.00' },
  { id: 3, imgSrc: product3, name: 'Pearl Ring Set', price: '$4.00' },
  { id: 4, imgSrc: product4, name: 'Layered Bracelet', price: '$7.00' },
  { id: 5, imgSrc: product5, name: 'Charm Necklace', price: '$9.00' },
  { id: 6, imgSrc: product6, name: 'Butterfly Studs', price: '$19.00' },
  { id: 7, imgSrc: product7, name: 'Coin Chain Locket', price: '$8.00' },
  { id: 8, imgSrc: product8, name: 'Multi- Layer Necklace Set', price: '$9.00' },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="featured-products-section">
      <h2 className="featured-products-heading">Featured Products</h2> 
    <div className="featured-products-container">
      <button className="slide-btn prev-btn" onClick={slideLeft}>
        &#10094;
      </button>
      <div className="products-slider">
        {products.slice(currentIndex, currentIndex + 3).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slide-btn next-btn" onClick={slideRight}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default FeaturedProducts;
