import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p className="price">{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
