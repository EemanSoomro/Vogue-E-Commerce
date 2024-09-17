import React from "react";
import "./PoliciesNewsletter.css";

const PoliciesNewsletter = () => {
  return (
    <div className="policies-newsletter-container">
      {/* Policies Section */}
      <div className="policies-section">
        <h2>Our Policies</h2>
        <div className="policies-boxes">
        
           
          <div className="policy-box">
            <i className="fa fa-undo"></i>
            <p>30-Day Return Policy</p>
          </div>
          <div className="policy-box">
            <i className="fa fa-headset"></i>
            <p>24/7 Customer Support</p>
          </div>
          <div className="policy-box">
            <i className="fa fa-lock"></i>
            <p>Secure Online Payments</p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates, deals, and promotions directly to your inbox.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default PoliciesNewsletter;
