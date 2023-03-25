import HeroSVG from "./HeroSVG";

import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div style={{ position: "relative" }}>
      <picture style={{ display: "flex" }}>
        <source
          media="(max-width: 660px)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg"
        />
        <source
          media="(max-width: 1608px)"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/3dda1fe7cc8fd474bda27512b31c1cb2-6_tablet_1067x470.jpg"
        />
        <img
          fetchpriority="high"
          //   className="fullbleed-header__main-bg"
          src="https://cdn.evbstatic.com/s3-build/fe/build/images/777f19086d57c5de5a008b3ea3b0d2bc-6_mobile_659x494.jpg"
          alt="Homepage header"
          srcSet="https://cdn.evbstatic.com/s3-build/fe/build/images/f6b763a0d6593f72c1f88d331b5cb616-6_web_1919x543.jpg 1920w,https://cdn.evbstatic.com/s3-build/fe/build/images/2ba592d2a9b7488ca8f2c23d555610ac-6_4K_1920x544.jpg 1924w,"
          sizes="(max-width: 1920px) 1920px, 1924px"
          style={{ backgroundColor: "#89A2BE", width: "100%" }}
          loading="eager"
        />
      </picture>
      <div className={styles["hero-overlay"]}>
        <div className={styles["hero-overlay__content"]}>
          <HeroSVG />
          <button className={styles.cta}>Find Your next event</button>
        </div>
      </div>
    </div>
  );
}
