import React, { useEffect, useState } from "react";
import ResultList from "../ResultsList/ResultList";
import ResultItem from "../ResultsList/ResultItem";

import "./SearchResult.css";
import { FaClock, FaLevelUpAlt } from "react-icons/fa";

function SearchResult({ recent, trends, char }) {
  trends = trends.filter((t) => t.term.includes(char));
  return (
    <div className="container">
      <ResultList data-testid="result-list">
        {recent
          .filter((r) => r.includes(char))
          .slice(0, 3)
          .map((r, i) => (
            <div key={i} data-testid="recent-results">
              <ResultItem title={r} icon={<FaClock />}></ResultItem>
            </div>
          ))}
        {trends.slice(0, 4).map((t, i) => (
          <div key={i} data-testid="tranding-results">
            <ResultItem title={t.term} icon={<FaLevelUpAlt />}></ResultItem>
          </div>
        ))}
      </ResultList>
    </div>
  );
}

export default SearchResult;
