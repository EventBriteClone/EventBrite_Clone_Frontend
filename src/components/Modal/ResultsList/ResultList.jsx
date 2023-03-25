import React from "react";

import "./ResultList.css";

function ResultList({ children }) {
  return (
    <div>
      <ul className="result-container">{children}</ul>
    </div>
  );
}

export default ResultList;
