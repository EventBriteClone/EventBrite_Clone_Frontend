import React from "react";
import Header from "../../../Layout/Header";
import Footer from "../Footer";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div>
      <Header />
      <h1 className={styles["notfound"]}>
        Whoops, the page or event you are looking for was not found.
      </h1>
      <h2 class={styles["error"]}>
        If you feel this message is in error, please{" "}
        <a href="https://www.eventbrite.com/support/contact-us">let us know</a>.
      </h2>
      <Footer />
    </div>
  );
}
