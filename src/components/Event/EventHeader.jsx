import styles from "./EventHeader.css";
export default function EventHeader(props) {
  return (
    <div className="event-header">
      <div className="event-background">
        <img src="./src/event-background.svg" width={1533} />
      </div>
      <div className="event-poster-background">
        <img
          className="poster-blur"
          src="https://image.freepik.com/free-vector/modern-event-banner-background-template_85212-202.jpg"
          width={1200}
          height={470}
        />
      </div>
      <div className="event-poster">
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
