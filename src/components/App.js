import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';
import { Grid } from 'react-loader-spinner';
import { funcRequest } from './js/api';
export class App extends React.Component {
  state = {
    tag: '',
    images: [],
    page: 1,
    loadMore: false,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tag !== prevState.tag) {
      this.onStartLoader();
      funcRequest(this.state.tag, this.state.page)
        .then(data => {
          this.onCloseLoader();
          if (data.totalHits === 0) {
            alert('Oops! No images found. Please enter another word');
          }
          this.setState({
            images: data.hits,
            page: 1,
            loadMore: this.state.page < Math.ceil(data.totalHits / 12),
          });
        })
        .catch(err => console.log(err));
    }
    if (this.state.page !== prevState.page) {
      funcRequest(this.state.tag, this.state.page)
        .then(data => {
          this.setState(prev => ({
            images: [...prev.images, ...data.hits],
            loadMore: this.state.page < Math.ceil(data.totalHits / 12),
          }));
        })
        .catch(err => console.log(err));
    }
  }
  onStartLoader = () => {
    this.setState({ loader: true });
  };

  onCloseLoader = () => {
    this.setState({ loader: false });
  };
  onChangeTag = newTag => {
    this.setState({ tag: newTag });
  };

  onChangePage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeTag} />;
        {this.state.loader === true ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '200px',
            }}
          >
            <Grid />
          </div>
        ) : (
          <>
            <ImageGallery
              onRequest={this.state.tag}
              onCreateImg={this.state.images}
            />
            {this.state.loadMore && <BtnLoadMore onClick={this.onChangePage} />}
          </>
        )}
      </>
    );
  }
}
