import React from 'react';

function Card({ title, description, buttonText }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="cta-button">{buttonText}</button>
    </div>
  );
}

export default Card;