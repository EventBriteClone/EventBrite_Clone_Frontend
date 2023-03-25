import Tabs from "./Tabs";

import styles from "./AvailableTabs.module.css";

export default function AvailableTabs(props) {
  return (
    <nav>
      <ul className={styles.ul}>
        <Tabs selected={true} title="All" i="0" />
        <Tabs title="Online" i="1" />
        <Tabs title="Today" i="2" />
        <Tabs title="This weekend" i="3" />
        <Tabs title="Free" i="4" />
        <Tabs title="Music" i="5" />
        <Tabs title="Food & Drink" i="6" />
        <Tabs title="Charity & Causes" i="7" />
      </ul>
    </nav>
  );
}
