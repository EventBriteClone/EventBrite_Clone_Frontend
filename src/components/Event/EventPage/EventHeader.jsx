import styles from "./EventHeader.module.css";
export default function EventHeader(props) {
  return (
    <div className={styles["event-header"]}>
      <div className={styles["event-background"]}>
        {/* <img
          src="data:image/svg+xml;charset=utf8,%3Csvg width='1676' height='430' viewBox='0 0 1676 430' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3405_50198)'%3E%3Cpath d='M1669.31 -124.702C1704.63 -198.281 1599.75 -278.89 1440.21 -219.509C1280.67 -160.128 1138.67 -174.472 940.588 -234.668C588.163 -341.792 438.492 -309.897 215.804 -220.763C150.423 -195.199 15.9418 -122.33 0.814447 -35.3897C-18.0424 73.26 298.334 62.7189 143.288 203.358C-11.7568 343.996 26.7216 552.457 835.628 313.658C939.215 283.079 1109.58 269.122 1259.68 366.729C1409.78 464.336 1549.16 434.834 1602.55 362.937C1716.96 208.836 1609.92 -1.08292 1669.31 -124.702Z' fill='%23EDF1FC'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3405_50198'%3E%3Crect width='1676' height='430' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
          width={1533}
        /> */}
      </div>
      <div className={styles["event-poster-background"]}>
        <img
          className={styles["poster-blur"]}
          src="https://image.freepik.com/free-vector/modern-event-banner-background-template_85212-202.jpg"
          width={1200}
          height={470}
        />
      </div>
      <div className={styles["event-poster"]}>
        <img
          className="poster"
          src="https://image.freepik.com/free-vector/modern-event-banner-background-template_85212-202.jpg"
          width={940}
          height={470}
        />
      </div>
    </div>
  );
}
