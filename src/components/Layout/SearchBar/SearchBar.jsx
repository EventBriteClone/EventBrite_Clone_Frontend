import SearchBarIcon from "./SearchBarIcon";
import SearchBarInput from "./SearchBarInput";
import Modal from "../../Modal/Modal";
import {
  useSearchDispatch,
  useSearchState,
} from "../../../context/SearchModalContext";

import styles from "./SearchBar.module.css";
import { createPortal } from "react-dom";
export default function SearchBar() {
  const searchState = useSearchState();
  const searchDispatch = useSearchDispatch();
  return (
    <div className={styles["search-bar__container"]}>
      <button
        onClick={() => {
          searchDispatch(true);
        }}
        className={styles["search-bar"]}
      >
        <SearchBarIcon></SearchBarIcon>
        <SearchBarInput></SearchBarInput>
      </button>
      {searchState.isOpen &&
        createPortal(<Modal />, document.getElementById("modal"))}
    </div>
  );
}
