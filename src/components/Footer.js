import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 by Ankur Bharti</p>
      </div>
      <div className="footer-right">
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="mailto:someone@example.com"><FaEnvelope /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
