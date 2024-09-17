import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products'; // Correct import
import { products } from '../components/productsData'; // Import the products data
import Footer from '../components/Footer';
const ProductsPage = () => {
  return (
    <div>
        <Navbar />
      <Products products={products} /> {/* Pass the products data as a prop */}
      <Footer />
      </div>
  );
};

export default ProductsPage;
