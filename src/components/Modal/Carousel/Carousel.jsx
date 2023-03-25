import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "./Carousel.module.css";

const event = [
  {
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
    organizerLogo:
      "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
    organizerName: "Lorem ipsum",
    eventName: "Lorem ipsum dolor sit",
    eventSummary: "Lorem ipsum dolor sit",
  },
  {
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F131060017%2F438776807040%2F1%2Foriginal.20210402-213056?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=ed10f677d3dbcda77b236074e536644f",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
    organizerLogo:
      "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
    organizerName: "Lorem ipsum",
    eventName: "Lorem ipsum dolor sit",
    eventSummary: "Lorem ipsum dolor sit",
  },
  {
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F126659303%2F438776807040%2F1%2Foriginal.20210219-204912?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=67eacd74136e607ebe46ebbaa4bbb7ef",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum",
    organizerLogo:
      "https://cdn.evbuc.com/images/100912392/438776807040/1/original.20200513-210241",
    organizerName: "Lorem ipsum",
    eventName: "Lorem ipsum dolor sit",
    eventSummary: "Lorem ipsum dolor sit",
  },
];
function Carousel() {
  return (
    <div className={styles["carousel-container"]}>
      <div className={styles["carousel-title"]}>
        <p className={styles["carousel-title-text"]}>
          Our favorite online event collections
        </p>
        <div className={styles["carousel-title-arrows"]}>
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
      <div className={styles["carousel-body"]}>
        {event.map((e, i) => (
          <div key={i} className={styles["slider"]}>
            <img
              src={e.imgSrc}
              alt=""
              className={styles["carousel-body-img"]}
            />
            <div className={styles["slider-body"]}>
              <p className={styles["carousel-body-title"]}>{e.title}</p>
              <div className={styles["carousel-body-organizer"]}>
                <img
                  src={e.organizerLogo}
                  className={styles["carousel-body-organizer-img"]}
                />
                <p className={styles["carousel-body-organizer-title"]}>
                  {e.organizerName}
                </p>
              </div>
              <p className={styles["carousel-body-event"]}>{e.eventName}</p>
              <p className={styles["carousel-body-summary"]}>
                {e.eventSummary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
