import React from 'react';

export const CategoriaCard = ({ title, subtitle, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={image} alt={title} />
    </div>
  );
};
