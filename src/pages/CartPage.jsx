import React from 'react';
import Navbar from '../components/Navbar';
import ShoppingCartPage from '../components/ShoppingCartPage';
 // Import the products data
import Footer from '../components/Footer';
const CartPage = () => {
  return (
    <div>
        <Navbar />
        <ShoppingCartPage />
      
      <Footer />
      </div>
  );
};

export default CartPage;
