import React from 'react';
import '../styles/Home.css';
import Logo from '../components/Logo';
import bgImage from '../assets/bgimg12.jpg';
// Import Google Fonts in index.html or App.jsx

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="text-container">
                  <div className="empowering-text">
                    <h1>EMPOWERING</h1>
                  </div>
                  <div className="health-text">
                    <h1>Health</h1>
                  </div>
                  <div className="enriching-text">
                    <h1>ENRICHING</h1>
                  </div>
                  <div className="lives-text">
                    <h1>Lives</h1>
                  </div>
                </div>
              </div>
              <a href="/products" className="cta-button">Explore Our Products</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-row">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Quality Assurance</h3>
              <p>All our products undergo rigorous testing to ensure the highest quality and efficacy.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Research-Backed</h3>
              <p>Our formulations are developed based on the latest scientific research and innovations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Industry Leader</h3>
              <p>With decades of experience, we are a trusted name in the pharmaceutical industry.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="product-categories">
        <div className="container">
          <h2 className="section-title">Our Product Categories</h2>
          <div className="category-grid">
            <a href="/products?category=Supplements" className="category-card">
              <h3>Supplements</h3>
              <p>Supporting overall health and wellness</p>
            </a>
            
            <a href="/products?category=Vitamins" className="category-card">
              <h3>Vitamins</h3>
              <p>Essential nutrients for optimal health</p>
            </a>
            
            <a href="/products?category=Anti-inflammatory" className="category-card">
              <h3>Anti-inflammatory</h3>
              <p>Reducing inflammation and associated pain</p>
            </a>
            
            <a href="/products?category=Pain Relief" className="category-card">
              <h3>Pain Relief</h3>
              <p>Effective solutions for pain management</p>
            </a>
            
            <a href="/products?category=Joint Health" className="category-card">
              <h3>Joint Health</h3>
              <p>Supporting mobility and joint function</p>
            </a>
            
            <a href="/products?category=Bone Health" className="category-card">
              <h3>Bone Health</h3>
              <p>Strengthening bones and preventing deterioration</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;