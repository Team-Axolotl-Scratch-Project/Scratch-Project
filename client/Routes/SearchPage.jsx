// This is the top level container of the Search page

import React from 'react';
import SearchBar from '../Components/SearchBar.jsx';

const SearchPage = () => {
  return (
    <div class="search-page" id="search-page">
      {/* This component renders the Search Bar component */}
      <h1>Welcome to SafeFace!</h1>
      <h2>You're one search away from happier skin</h2>
      <body><SearchBar /></body>
    </div>
  );
};

export default SearchPage;
