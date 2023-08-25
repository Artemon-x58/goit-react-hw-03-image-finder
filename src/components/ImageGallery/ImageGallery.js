import React from 'react';
import '../styles.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onCreateImg }) => {
  return (
    <ul className="ImageGallery">
      {onCreateImg.map(img => (
        <ImageGalleryItem
          key={img.id}
          alt={img.tags}
          src={img.webformatURL}
          srcModal={img.largeImageURL}
        />
      ))}
    </ul>
  );
};
