// importing necessary files and hooks
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartFunction from './Components/CartFunction';
import Cart from './Components/Cart';

const App = () => {
  return (
    // Routing files
    <Router>
      <Routes>
        <Route path="/" element={<CartFunction />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
