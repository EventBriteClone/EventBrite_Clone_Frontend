import React, { useEffect, useState } from "react";
import ResultList from "../ResultsList/ResultList";
import ResultItem from "../ResultsList/ResultItem";

import "./SearchResult.css";
import { FaClock, FaLevelUpAlt } from "react-icons/fa";

function SearchResult({ recent, trends, char }) {
  console.log(recent);
  trends = trends.filter((t) => t.term.includes(char));
  return (
    <div className="container">
      <ResultList>
        {recent
          .filter((r) => r.includes(char))
          .slice(0, 3)
          .map((r, i) => (
            <ResultItem key={i} title={r} icon={<FaClock />}></ResultItem>
          ))}
        {trends.slice(0, 4).map((t, i) => (
          <ResultItem
            key={i}
            title={t.term}
            icon={<FaLevelUpAlt />}
          ></ResultItem>
        ))}
      </ResultList>
    </div>
  );
}

export default SearchResult;
