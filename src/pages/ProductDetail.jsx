import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products.jsx';
import ProductPage from '../components/ProductPage';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) {
      // Get the product data based on the slug
      const productData = getProductBySlug(slug);
      if (productData) {
        setProduct(productData);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="loading">
        <div className="container">
          <p>Loading product information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-page">
        <div className="container">
          <div className="product-image-section">
            <div className="product-name-container">
              <h1 className="product-name">Product Not Found</h1>
            </div>
            <p>The product you are looking for does not exist or has been removed.</p>
          </div>
        </div>
        
        <div className="bottom-navigation">
          <div className="container">
            <div className="back-button-container">
              <Link to="/products" className="back-button">Back to All Products</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ProductPage product={product} />;
};

export default ProductDetail;