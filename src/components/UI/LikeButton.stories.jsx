import LikeButton from "./LikeButton";

export default {
  title: "Components/UI/LikeButton",
  component: LikeButton,
};

export const Like = (args) => <LikeButton {...args} />;
Like.args = { position: "relative", transform: "translate(50%,50%)" };
