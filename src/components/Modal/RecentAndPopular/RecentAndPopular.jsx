import React, { useEffect, useState } from "react";
import ResultList from "../ResultsList/ResultList";
import ResultItem from "../ResultsList/ResultItem";

import "./RecentAndPopular.css";
import { FaClock, FaLevelUpAlt } from "react-icons/fa";

// When you create a list of elements you must specify a unique key prop
// Apply a better key prop than what I did

function RecentAndPopular({ recent, trends }) {
  return (
    <div className="container">
      <p className="title">Recent and popular reseaches</p>
      <ResultList>
        {recent.slice(0, 3).map((r, i) => (
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

export default RecentAndPopular;
