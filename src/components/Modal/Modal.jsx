import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar/SearchBar";
import LocationBar from "./LocationBar/LocationBar";
import Suggested from "./Suggested/Suggested";
import RecentAndPopular from "./RecentAndPopular/RecentAndPopular";
import { FaTimes, FaArrowDown } from "react-icons/fa";

import "./Modal.css";
import Carousel from "./Carousel/Carousel";
import SearchResult from "./SearchResult/SearchResult";
import { useSearchDispatch } from "../../context/SearchModalContext";

function Modal() {
  const [recent, setRecent] = useState([]);
  const [trends, setTrends] = useState([]);
  const [query, setQuery] = useState("");
  const [closeAnimation, setCloseAnimation] = useState(false);
  const searchDispatch = useSearchDispatch();

  useEffect(() => {
    setRecent(localStorage.getItem("recent")?.split(",") || []);
    setTrends([
      { term: "startup events", score: 20 },
      { term: "job fair", score: 20 },
      { term: "fintech", score: 9 },
      { term: "digital marketing", score: 8 },
      { term: "architecture", score: 6 },
      { term: "youth summit", score: 5 },
      { term: "tech events", score: 4 },
      {
        term: "medical conferences",
        score: 4,
      },
      { term: "blockchain", score: 4 },
      { term: "flat6labs", score: 3 },
      { term: "construction", score: 3 },
      { term: "وعي", score: 2 },
      { term: "فضائل المصرعه استفنانى", score: 2 },
      { term: "web development", score: 2 },
      {
        term: "veterinary conference",
        score: 2,
      },
      { term: "vape", score: 2 },
      { term: "the elite", score: 2 },
      {
        term: "sustainable development",
        score: 2,
      },
      { term: "submit even", score: 2 },
      { term: "sharm el sheikh", score: 2 },
      { term: "royal maxim palace", score: 2 },
    ]);

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        handleCloseModal();
      }
    });
  }, []);
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleCloseModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      searchDispatch(false);
    }, 1000);
  };
  return (
    <div className={`modalBackground ${closeAnimation ? "hide" : ""}`}>
      <div className="modalContainer">
        <span className="closeBtn" onClick={handleCloseModal} data-testid="closeButton">
          <div className="times">
            <FaTimes />
          </div>
          <div className="arrow">
            <FaArrowDown />
          </div>
        </span>
        <div className="sections">
          <div className="searchSection" data-testid="searchSection">
            <span data-testid="searchInput">
              <SearchBar
                query={query}
                handleQueryChange={handleQueryChange}
              ></SearchBar>
              </span>
            <LocationBar></LocationBar>
            {!query ? (
              <Suggested></Suggested>
            ) : (
              <div>
                <SearchResult
                  recent={recent}
                  trends={trends}
                  char={query}
                ></SearchResult>
              </div>
            )}
          </div>
          {!query && (
            <div className="carouselSection" data-testid="carouselSection">
              <Carousel />
            </div>
          )}
          {!query && (
            <div className="resultSection" data-testid="resultSection">
              <RecentAndPopular
                recent={recent}
                trends={trends}
              ></RecentAndPopular>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
