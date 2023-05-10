import PriceTag from "./PriceTag";
import styles from "./PriceTag.module.css";

export default {
  title: "Components/Event Page/Price Tag",
  component: PriceTag,
  parameters: {
    docs: {
      description: {
        component:
          "The price tag component displays event price and get tickets button",
      },
    },
  },
};

export const Primary = (args) => <PriceTag {...args} />;

Primary.args = {
  price: "$$$$$$$$$$",
  buttonClass: `${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]}`,
};

export const Unavailable = (args) => (
  <PriceTag
    {...args}
    buttonClass={`${styles["eds-btn"]} ${styles["eds-btn--button"]} ${styles["eds-btn--fill"]} ${styles["js-embed-ticket-modal-btn"]} ${styles["eds-btn--unavailable"]}`}
  />
);
