import React from 'react';
import './Footer.css'; // style CSS pour le footer
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
     <footer className="footer">
      <div className="footer-content">

        <div className="footer-section contact">
          <h4><FaPhoneAlt/>Contact Us</h4>
          <p>Phone: +1 123-456-7890</p>
          <p><FaEnvelope/>Email: info@kombohairsaloon123.ca</p>
          <p><FaMapMarkerAlt/>Address: 1-234 Paradise-of-Hair Street, Ottawa, ON</p>
        </div>

        <div className="footer-section service-hours">
          <h4><FaClock/>Opening Hours</h4>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kombo Hair Saloon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
