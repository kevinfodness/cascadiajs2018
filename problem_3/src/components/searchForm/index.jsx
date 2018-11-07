import React from 'react';
import './styles.scss';

export default function SearchForm() {
  return (
    <form className="search-form">
      <p>
        Search for your favorite games in the search box below. Click on their
        name to find out more information about them.
      </p>
      <div>
        <label htmlFor="search-form-search">
          Search:
          <input id="search-form-search" />
        </label>
      </div>
    </form>
  );
}
