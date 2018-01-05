import React from 'react';
import './loader.css';

export default () => (
  <div
    style={{ width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.1)' }}
  >
    <div className="spinner" />
  </div>
);
