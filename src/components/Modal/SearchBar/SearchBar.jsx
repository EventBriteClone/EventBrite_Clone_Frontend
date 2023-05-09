import React from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { useSearchDispatch } from "../../../context/SearchModalContext";

function SearchBar({ query, handleQueryChange }) {
  const navigate = useNavigate();
  const searchDispatch = useSearchDispatch();

  const handleSearch = () => {
    searchDispatch(false);
    navigate("/search/" + query);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <FaSearch
        data-testid="search-icon"
        className="search-icon"
        onClick={handleSearch}
      />
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search for anything"
          className="search-input"
          value={query}
          onInput={handleQueryChange}
          onKeyDown={handleEnter}
        />
      </div>
      <FaArrowRight
        data-testid="back-icon"
        className="back-icon"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
