// components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Online Bookstore</Link>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
