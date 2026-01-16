

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import productsData from './db.json';

const App = () => {
  // Define initial product data
  const [products, setProducts] = useState(productsData.products);
  const [filter, setFilter] = useState('all');

  // Filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock === true;
    if (filter === 'outOfStock') return product.inStock === false;
    return true; // 'all' shows everything
  });

  // Remove product function (Bonus Challenge)
  const handleRemoveProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1 id="header">Product Dashboard</h1>
      
      {/* Filter buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')}>All Products</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>
      
      {/* Render ProductList with filtered products */}
      <ProductList 
        products={filteredProducts} 
        onRemove={handleRemoveProduct}
      />
    </div>
  );
};

export default App;
