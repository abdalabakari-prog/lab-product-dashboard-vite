
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock, image } = product;

  return (
    <div className={inStock ? styles.productContainer : styles.outOfStock}>
      <h3>{name}</h3>
      <p className={styles.price}>{price}</p>
      <p className={styles.availability}>
        {inStock ? '✅ In Stock' : '❌ Out of Stock'}
      </p>
      {image && <img src={image} alt={name} className={styles.productImage} />}
      
      {/* Bonus: Remove button */}
      <button 
        onClick={() => onRemove(id)}
        className={styles.removeButton}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
