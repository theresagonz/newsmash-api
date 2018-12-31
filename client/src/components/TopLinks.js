import React from 'react';
import { Link } from 'react-router-dom';

const TopLinks = () => {
  return (
    <div className="top-links-container">
      <div className="sidebar-link"><Link to='/mixes'>Top stories mix</Link></div>
      <div className="sidebar-link"><Link to='/mashes'>Top stories mash</Link></div>
    </div>
  )
}

export default TopLinks;
