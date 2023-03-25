import React from "react";
import "./Badge.css";

function Badge({ title }) {
  return (
    <div className="badge-item-container">
      <span className="badge-item-span">{title}</span>
    </div>
  );
}

export default Badge;
