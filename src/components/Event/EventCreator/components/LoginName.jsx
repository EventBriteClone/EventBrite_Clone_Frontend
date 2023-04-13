import React from "react";
import styles from "./LoginName.module.css";
import { Link } from "react-router-dom";
import MainIcon from "../../../Icons/MainIcon";
function LoginName() {
  return (
    <div className={styles["header"]}>
      <Link to="/">
        <MainIcon></MainIcon>
      </Link>
      <div className={styles["profile"]}>
        <div className={styles["sign-in-info"]}>
          <h2>Ma</h2>
          <h1>Muhammad Ahmad</h1>
          <i className={styles["ri-arrow-down-s-line"]}></i>
        </div>
      </div>
    </div>
  );
}
export default LoginName;
