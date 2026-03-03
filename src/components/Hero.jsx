import React from 'react';
import './Hero.css';

const Hero = ({ title, currentPage, bgImage }) => {
  return (
    <section className="hero-banner">
      <div 
        className="hero-inner" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text-content">
          <h1 className="hero-title">{title}</h1>
          <div className="breadcrumb">
            <span className="home-text">Home</span>
            <span className="separator">/</span>
            <span className="current-text">{currentPage}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;