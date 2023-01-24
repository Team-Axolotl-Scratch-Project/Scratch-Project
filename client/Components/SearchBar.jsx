// This component lives on the search page and contains the search bar and submit button

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  update_allergens,
  fetchProductsByAllergen,
  update_results,
} from '../productsSlice';
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  // dispatch actions using RTK
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/results");
  }

  return (
    <div id="search-group">
      {/* input field where user can type their allergen */}
      <input id="search-bar"
        placeholder="What should we avoid?"
        onChange={(e) => dispatch(update_allergens(e.target.value))}>
      </input>
      {/* associated submit button */}
      <div>
        <button
          id="search-button"
          onClick={(e) => {
            /* send fetch query with current data in state, and save response data to state */
            dispatch(fetchProductsByAllergen());
            handleClick();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
