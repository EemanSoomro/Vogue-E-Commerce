import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import PoliciesNewsletter from '../components/PoliciesNewsletter';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <PoliciesNewsletter />
      <Footer />
      {/* Add more sections as needed */}
     
    </div>
  );
};

export default HomePage;
