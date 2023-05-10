import React from "react";

import "./ResultList.css";
import { useNavigate } from "react-router-dom";
import { useSearchDispatch } from "../../../context/SearchModalContext";

function ResultList({ title, icon }) {
  const navigate = useNavigate();
  const searchDispatch = useSearchDispatch();

  const handleSearch = (query) => {
    searchDispatch(false);
    navigate("/search/" + query);
  };
  const handleClick = () => {
    localStorage.setItem(
      "recent",
      title +
        (localStorage.getItem("recent")
          ? "," + localStorage.getItem("recent")
          : "")
    );
    handleSearch(title);
  };
  return (
    <li
      onClick={handleClick}
      className="result-item"
      data-testid="result-list-item"
    >
      <div className="result-item-element">
        <span
          className="result-item-element-icon"
          data-testid="result-list-icon"
        >
          {icon}
        </span>
        <div>{title}</div>
      </div>
    </li>
  );
}

export default ResultList;
