import React, { useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ query,handleQueryChange }) {
  const handleBackClick = () => {
    // handle back button click
  };

  const handleSearchClick = () => {
    // handle search button click
  };

  return (
    <div className="search-bar-container">
      <FaSearch data-testid="search-icon" className="search-icon" onClick={handleSearchClick} />
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for anything"
          className="search-input"
          value={query}
          onInput={handleQueryChange}
        />
      </div>
      <FaArrowRight data-testid="back-icon"  className="back-icon" onClick={handleBackClick} />
    </div>
  );
}

export default SearchBar;
