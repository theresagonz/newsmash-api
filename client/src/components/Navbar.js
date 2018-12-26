import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <nav>
        <div className="navbar-logo">
          <img src="/logo-white.png" alt="newsmash-logo" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
