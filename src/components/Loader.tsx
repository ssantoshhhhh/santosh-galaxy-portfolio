import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-text">
      {['L','O','A','D','I','N','G'].map((char, i) => (
        <span key={i} className="loader-letter">{char}</span>
      ))}
      <div className="glare" />
    </div>
  </div>
);

export default Loader; 