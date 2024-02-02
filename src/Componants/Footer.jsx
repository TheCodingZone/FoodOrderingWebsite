import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} The Coding Hub | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
