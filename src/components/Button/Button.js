import React from 'react';
import '../styles.css';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
};
