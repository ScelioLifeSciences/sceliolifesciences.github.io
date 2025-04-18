import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import { getProductImage } from './ProductImages.jsx';
import { FormattedProductName } from '../data/products.jsx';

// Component to format text with styled percentages
const FormattedPercentage = ({ text }) => {
  if (!text) return null;
  
  // Split the text by percentage signs and create an array of parts
  const parts = text.split(/(\d+(?:\.\d+)?%)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part is a percentage
        if (part.match(/\d+(?:\.\d+)?%/)) {
          const number = part.replace('%', '');
          return (
            <span key={index}>
              {number}<span className="percentage-symbol">%</span>
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

const ProductPage = ({ product }) => {
  // If no product is provided, show a placeholder
  if (!product) {
    return (
      <div className="product-page">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you are looking for does not exist or has been removed.</p>
          <Link to="/products" className="back-button">Back to All Products</Link>
        </div>
      </div>
    );
  }

  // Get the product image component
  const ProductImageComponent = getProductImage(product.slug);

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-content">
          <div className="product-image-section">
            <div className="product-image-container">
              {ProductImageComponent ? (
                <div className="product-image-svg">{ProductImageComponent}</div>
              ) : (
                <div className="product-image-placeholder">
                  <div className="placeholder-content">
                    <h2><FormattedProductName name={product.name} /></h2>
                    <p>{product.category}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="product-details">
            <div className="product-description">
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>
            
            {product.composition && (
              <div className="product-composition">
                <h2>Composition</h2>
                {Array.isArray(product.composition) ? (
                  <ul className="composition-list">
                    {product.composition.map((item, index) => (
                      <li key={index}><FormattedPercentage text={item} /></li>
                    ))}
                  </ul>
                ) : (
                  <p><FormattedPercentage text={product.composition} /></p>
                )}
              </div>
            )}
            
            {product.indications && (
              <div className="product-indications">
                <h2>Indications</h2>
                <p>{product.indications}</p>
              </div>
            )}
            
            {product.dosage && (
              <div className="product-dosage">
                <h2>Dosage</h2>
                <p>{product.dosage}</p>
              </div>
            )}
            
            {product.sideEffects && (
              <div className="product-side-effects">
                <h2>Side Effects</h2>
                <p>{product.sideEffects}</p>
              </div>
            )}
            
            {product.contraindications && (
              <div className="product-contraindications">
                <h2>Contraindications</h2>
                <p>{product.contraindications}</p>
              </div>
            )}
            
            {product.storage && (
              <div className="product-storage">
                <h2>Storage</h2>
                <p>{product.storage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bottom-navigation">
        <div className="container">
          <div className="back-button-container">
            <Link to="/products" className="back-button">Back to Products Page <span className="arrow-right">→</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;