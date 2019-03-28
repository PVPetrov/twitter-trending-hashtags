import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Logo =  ({ 
  src = "http://placehold.jp/150x50.png", 
  alt = 'Logo' }) => (
    <div className="logo">
      <img className="logo-img" src={src} alt={alt} />
    </div>
);

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;