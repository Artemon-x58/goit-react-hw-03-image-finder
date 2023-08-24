import React from 'react';
import '../styles.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onCreateImg }) => {
  // componentDidUpdate(prevProps, prevState) {
  //   const prevTag = prevProps.onRequest;
  //   const nextTag = this.props.onRequest;
  //   if (prevTag !== nextTag) {
  //     fetch(
  //       `https://pixabay.com/api/?q=${nextTag}&page=1&key=38156163-5b07cf7816d411510811c16ef&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(res => res.json())
  //       .then(data => this.setState({ images: data.hits }));
  //   }
  // }

  return (
    <ul className="ImageGallery">
      {onCreateImg &&
        onCreateImg.map(img => (
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