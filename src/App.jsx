import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';
import logo from './assets/logo.jpeg'; // Import the logo image

function App() {
  const [products] = useState([
    { id: 1, name: 'Vintage Pez Dispenser', price: '$50.00', description: 'Classic Pez dispenser from the 80s.' },
    { id: 2, name: 'Smurf Figurine', price: '$15.50', description: 'Vintage collectible Smurf figure.' },
    { id: 3, name: 'Care Bear Plush', price: '$45.00', description: 'Soft plush from the original Care Bears 1983 series.' }
  ]);

  return (
    <div className="app">
      <img src={logo} alt="AJ Mill Collectibles Logo" className="logo" />
      <h1 className="title">AJ Mill Collectibles</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

