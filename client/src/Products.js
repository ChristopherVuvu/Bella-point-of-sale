// src/components/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Name: {product.name}, Price: {product.price}, Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
