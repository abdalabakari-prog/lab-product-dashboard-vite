
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  // Check if product list is empty
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div id="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* Iterate over products and render ProductCard for each */}
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
