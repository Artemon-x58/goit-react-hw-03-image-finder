import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';

import { funcRequest } from './js/api';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [tag, setTag] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!tag) return;
    toggleLoader();

    function getPictures() {
      funcRequest(tag, page)
        .then(data => {
          if (data.totalHits === 0) {
            alert('Oops! No images found. Please enter another word');
            return;
          }
          setImages(prevImages => [...prevImages, ...data.hits]);
          setLoadMore(page < Math.ceil(data.totalHits / 12));
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          toggleLoader();
        });
    }
    getPictures();
  }, [tag, page]);
  const toggleLoader = () => {
    setLoader(prevLoader => !prevLoader);
  };
  const onChangeTag = newTag => {
    setTag(newTag);
    setPage(1);
    setImages([]);
    setLoadMore(false);
  };

  const onChangePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeTag} />;{loader && <Loader />}
      <>
        {images.length > 0 && (
          <ImageGallery onRequest={tag} onCreateImg={images} />
        )}

        {loadMore && <BtnLoadMore onClick={onChangePage} />}
      </>
    </>
  );
};
