import React from 'react';

export default function LoadingSpinner() {
  return (
    <div id="spinner" className="container">
      <div className="row">
        <div id="loader">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="lading" />
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  );
}
