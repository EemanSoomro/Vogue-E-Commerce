import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetails from '../components/ProductDetails'; // Correct import
import { products } from '../components/productsData'; // Import the products data
import Footer from '../components/Footer';
const DetailsPage = () => {
  return (
    <div>
        <Navbar />
        <ProductDetails /> 
      <Footer />
      </div>
  );
};

export default DetailsPage;