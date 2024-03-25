// src/components/Sales.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('/sales')
      .then(response => setSales(response.data))
      .catch(error => console.error('Error fetching sales:', error));
  }, []);

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            Amount: {sale.amount}, Date: {sale.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
