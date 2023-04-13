import React from "react";
import styles from "./List.module.css";

function List() {
  return (
    <div>
      <div className={styles["search"]}>
        <form action="">
          <input type="search" placeholder="Search events" />
        </form>
      </div>
      <div className={styles["list-icon"]}>
        <div className={styles["icon"]}>
          <i className="ri-list-check"></i>
        </div>
        <h1>List</h1>
      </div>
    </div>
  );
}

export default List;
