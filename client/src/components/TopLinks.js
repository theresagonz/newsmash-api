import React from 'react';
import { Link } from 'react-router-dom';

const TopLinks = () => {
  return (
    <div className="top-links-container">
      <div className="sidebar-heading">Top Stories</div>
      <div className="sidebar-link">
        <Link to="/mixes">Get a mix</Link>
      </div>
      <div className="sidebar-link">
        <Link to="/mashes">Get a mash</Link>
      </div>
    </div>
  );
};

export default TopLinks;
