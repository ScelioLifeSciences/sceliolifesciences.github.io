import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, FormattedProductName } from '../data/products.jsx';
import '../styles/Products.css';
import { getProductImage } from '../components/ProductImages.jsx';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const allProducts = getAllProducts();
  
  // Get category from URL query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get('category');
    
    // Reset the products loaded state when filtering changes
    setProductsLoaded(false);
    
    if (category) {
      // Find the exact category match from available products
      const availableCategories = [...new Set(allProducts.map(p => p.category))];
      const matchedCategory = availableCategories.find(
        c => c.toLowerCase() === category.toLowerCase()
      );
      
      if (matchedCategory) {
        setSelectedCategory(matchedCategory);
        // Filter products to show ONLY the selected category
        const filtered = allProducts.filter(product => product.category === matchedCategory);
        setFilteredProducts(filtered);
      } else {
        // If no match found, show all products
        setSelectedCategory(null);
        setFilteredProducts(allProducts);
      }
    } else {
      setFilteredProducts(allProducts);
    }
    
    // Set products as loaded after a small delay to ensure DOM is ready
    setTimeout(() => {
      setProductsLoaded(true);
    }, 100);
  }, [allProducts]);

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="container">
          <h1>{selectedCategory ? `${selectedCategory}` : 'Our Products'}</h1>
          <p>
            {selectedCategory 
              ? `Explore our range of high-quality ${selectedCategory.toLowerCase()} designed to improve health and well-being.` 
              : 'Discover our range of high-quality pharmaceutical products designed to improve health and well-being.'}
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className="products-grid">
          {filteredProducts.map(product => {
            const ProductImageComponent = getProductImage(product.slug);
            
            return (
              <div 
                key={product.id} 
                className={`product-card ${productsLoaded ? 'product-loaded' : ''}`}
              >
                <div className="product-card-image">
                  {ProductImageComponent ? (
                    <div className="product-image-svg">{ProductImageComponent}</div>
                  ) : (
                    <div className="product-image-placeholder">
                      {/* Empty placeholder - no content */}
                    </div>
                  )}
                </div>
                <div className="product-card-content">
                  <h3><FormattedProductName name={product.name} /></h3>
                  <div className="product-card-category">{product.category}</div>
                  <p>{product.description.substring(0, 100)}...</p>
                  <Link to={`/products/${product.slug}`} className="product-card-link">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {selectedCategory && (
        <div className="bottom-navigation">
          <div className="container">
            <div className="navigation-buttons">
              <Link to="/" className="home-button"><span className="arrow-left">←</span> Back to Home Page</Link>
              <Link to="/products" className="back-button">View All Products <span className="arrow-right">→</span></Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;