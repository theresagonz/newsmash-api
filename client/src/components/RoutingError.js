import React from 'react';
import { Link } from 'react-router-dom';

export default function RoutingError() {
  return (
    <div className="center-hv">
      <h2>Oops, page not found</h2>
      <h5>
        <Link to="/">Try mashing up top headlines</Link>
      </h5>
    </div>
  );
}
