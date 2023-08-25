import React, { Component } from 'react';
import '../styles.css';
import { CustomModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };

  render() {
    return (
      <li className="ImageGalleryItem-image">
        <img
          onClick={this.toggleModal}
          className="ImageGalleryItem-image"
          src={this.props.src}
          alt={this.props.alt}
        />
        <CustomModal
          isOpen={this.state.isModalOpen}
          isClose={this.toggleModal}
          srcModal={this.props.srcModal}
        />
      </li>
    );
  }
}
