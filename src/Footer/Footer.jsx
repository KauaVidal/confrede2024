import React from 'react';
import './Footer.css';
import mobileImg from '../IMG/FooterMobile.png';
import webImg from '../IMG/FooterWeb.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={mobileImg} alt="Footer for mobile" className="footer-img mobile" />
      <img src={webImg} alt="Footer for web" className="footer-img web" />
    </footer>
  );
}

export default Footer;