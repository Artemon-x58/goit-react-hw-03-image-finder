import React from 'react';
import '../styles.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export const CustomModal = ({ isOpen, isClose, srcModal, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Example Modal"
    >
      <img src={srcModal} alt={alt} />
    </Modal>
  );
};
