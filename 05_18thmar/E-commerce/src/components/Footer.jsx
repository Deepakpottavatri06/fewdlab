import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Your trusted online shopping destination for premium products and exceptional service.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/products" className="text-white">Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p>Email: info@estore.com<br />Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;