import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Logo, { CompactLogo } from './components/Logo'

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('home');
  
  useEffect(() => {
    // Update current page based on location
    const path = location.pathname;
    
    if (path === '/') {
      setCurrentPage('home');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/products') {
      setCurrentPage('products');
    } else if (path.startsWith('/products/')) {
      setCurrentPage('product-detail');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    }
  }, [location]);

  return (
    <div className="app">
      <Header currentPage={currentPage} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <CompactLogo width={40} height={40} />
            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                fontFamily: 'Arial, sans-serif', 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#143c5c', 
                lineHeight: '1.2'
              }}>
                Scelio
              </div>
              <div style={{ 
                fontFamily: 'Arial, sans-serif', 
                fontSize: '16px', 
                fontWeight: 'bold',
                color: '#FF8C00', 
                lineHeight: '1.2'
              }}>
                Life Sciences
              </div>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Scelio Lifesciences. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
