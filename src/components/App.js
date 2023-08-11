import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends React.Component {
  state = {
    tag: '',
  };
  // componentDidUpdate(prevProps, prevState) {}
  handleFormSubmit = tag => {
    this.setState({ tag });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />;
        <ImageGallery onRequest={this.state.tag} />
      </>
    );
  }
}
