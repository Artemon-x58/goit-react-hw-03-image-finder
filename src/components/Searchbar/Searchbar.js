import React from 'react';
import '../styles.css';
export class Searchbar extends React.Component {
  state = {
    tag: '',
  };

  handleTagChange = e => {
    this.setState({ tag: e.currentTarget.value });
  };

  hadleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.tag);
    this.setState({ tag: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.hadleSubmit} className="searchForm">
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            onChange={this.handleTagChange}
            value={this.state.tag}
            //   autocomplete="off"
            //   autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
