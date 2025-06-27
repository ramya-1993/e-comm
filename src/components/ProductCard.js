import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
      {/* You can add more details or an "Add to Cart" button here */}
    </div>
  );
}

export default ProductCard;