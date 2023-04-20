import React from "react";

import "./ResultList.css";

function ResultList({ title, icon }) {
  const handleClick = () => {
    localStorage.setItem(
      "recent",
      title +
        (localStorage.getItem("recent")
          ? "," + localStorage.getItem("recent")
          : "")
    );
  };
  return (
    <li onClick={handleClick} className="result-item" data-testid="result-list-item">
      <div className="result-item-element">
        <span className="result-item-element-icon" data-testid="result-list-icon">{icon}</span>
        <div>{title}</div>
      </div>
    </li>
  );
}

export default ResultList;
