import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
          At Vogue, we celebrate the elegance and style of modern women with our exclusive range of jewelry and accessories. From timeless pieces to the latest trends, our collection is crafted to complement your unique personality. Elevate your look with our premium designs that bring sophistication to every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        

        {/* Contact Info */}
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: support@Vogue.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: 123 Vogue  Hyderabad, Sindh</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Vogue. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
