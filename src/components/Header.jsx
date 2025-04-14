import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Logo from './Logo';

const Header = ({ currentPage }) => {

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Logo width={60} height={60} />
            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                fontFamily: 'Arial, sans-serif', 
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#143c5c', /* Dark blue color */
                lineHeight: '1.2'
              }}>
                Scelio
              </div>
              <div style={{ 
                fontFamily: 'Arial, sans-serif', 
                fontSize: '22px', 
                fontWeight: 'bold',
                color: '#FF8C00', /* Orange color */
                lineHeight: '1.2'
              }}>
                Life Sciences
              </div>
            </div>
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li><Link to="/" className={currentPage === 'home' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/products" className={currentPage === 'products' || currentPage === 'product-detail' ? 'active' : ''}>Products</Link></li>
            <li><Link to="/about" className={currentPage === 'about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;