import React from "react";

import "./ResultList.css";

function ResultList({ children }) {
  return (
    <div>
      <ul className="result-container" data-testid="child-1">{children}</ul>
    </div>
  );
}

export default ResultList;
