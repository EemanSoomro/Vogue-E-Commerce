import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage'; 
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import AccountPage from './pages/AccountPage';

// Make sure to use the correct importP

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />  {/* Correct path for ProductPage */}
        <Route path="/product/:productId" element={<DetailsPage />} /> {/* Route for DetailsPage */}
        <Route path="/cart" element={<CartPage />} /> {/* Cart page route */}
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Account" element={<AccountPage />} />
         </Routes>
    </Router>
  );
};

export default App;
