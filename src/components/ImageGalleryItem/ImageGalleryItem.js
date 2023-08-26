import React, { useState } from 'react';
import '../styles.css';
import { CustomModal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ src, alt, srcModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <li className="ImageGalleryItem-image">
      <img
        onClick={toggleModal}
        className="ImageGalleryItem-image"
        src={src}
        alt={alt}
      />
      <CustomModal
        isOpen={isModalOpen}
        isClose={toggleModal}
        srcModal={srcModal}
      />
    </li>
  );
};
