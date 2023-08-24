import React, { Component } from 'react';
import '../styles.css';
import { CustomModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <li className="ImageGalleryItem-image">
        <img
          onClick={this.openModal}
          className="ImageGalleryItem-image"
          src={this.props.src}
          alt={this.props.alt}
        />
        <CustomModal
          isOpen={this.state.isModalOpen}
          isClose={this.closeModal}
          srcModal={this.props.srcModal}
        />
      </li>
    );
  }
}
