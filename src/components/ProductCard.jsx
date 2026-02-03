import React, { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={
        product.inStock ? styles.inStock : styles.outOfStock
      }
    >
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => setVisible(false)}>Remove</button>
    </div>
  );
};

export default ProductCard;
