import React from 'react';
import '../styles.css';

export const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    onSubmit(inputValue);
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleFormSubmit} className="searchForm">
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          name="input"
          className="searchForm-input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
