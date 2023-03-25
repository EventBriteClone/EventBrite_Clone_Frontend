import React from "react";

import Badge from "./Badge/Badge";

import "./Suggested.css";

function Suggested() {
  return (
    <div>
      <ul className="badge-container">
        <li className="badge-item">
          <Badge title={"Online"} />
        </li>
        <li className="badge-item">
          <Badge title={"Today"} />
        </li>
        <li className="badge-item">
          <Badge title={"This Weekend"} />
        </li>
        <li className="badge-item">
          <Badge title={"Free"} />
        </li>
        <li className="badge-item">
          <Badge title={"Music"} />
        </li>
        <li className="badge-item">
          <Badge title={"Food & drink"} />
        </li>
      </ul>
    </div>
  );
}

export default Suggested;
