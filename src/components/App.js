import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';

import { funcRequest } from './js/api';
import { Loader } from './Loader/Loader';
export class App extends React.Component {
  state = {
    tag: '',
    images: [],
    page: 1,
    loadMore: false,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.tag !== prevState.tag ||
      this.state.page !== prevState.page
    ) {
      this.toggleLoader();
      funcRequest(this.state.tag, this.state.page)
        .then(data => {
          if (data.totalHits === 0) {
            alert('Oops! No images found. Please enter another word');
            return;
          }
          this.setState(prev => ({
            images: [...prev.images, ...data.hits],
            loadMore: this.state.page < Math.ceil(data.totalHits / 12),
          }));
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.toggleLoader();
        });
    }
  }

  toggleLoader = () => {
    this.setState(prev => ({
      loader: !prev.loader,
    }));
  };
  onChangeTag = newTag => {
    this.setState({ tag: newTag, page: 1, images: [], loadMore: false });
  };

  onChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeTag} />;
        {this.state.loader && <Loader />}
        <>
          {this.state.images.length > 0 && (
            <ImageGallery
              onRequest={this.state.tag}
              onCreateImg={this.state.images}
            />
          )}

          {this.state.loadMore && <BtnLoadMore onClick={this.onChangePage} />}
        </>
      </>
    );
  }
}
