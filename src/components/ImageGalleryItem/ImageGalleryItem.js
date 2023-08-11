import React from 'react';
import '../styles.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};
