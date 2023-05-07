import React from "react";
import ResultItem from "./ResultItem";
import { FaClock } from "react-icons/fa";

export default {
  title: "Components/Modal/ResultList/ResultItem",
  component: ResultItem,
};

export const WithOnClick = () => {
  const handleClick = (title) => {
    alert(`Clicked on "${title}"`);
  };

  return (
    <ResultItem
      title="Example 1"
      icon={<FaClock />}
      onClick={() => handleClick("Example 1")}
    />
  );
};

export const WithIcon = () => {
  return <ResultItem title="Example 1" icon={<FaClock />} />;
};

export const WithoutIcon = () => {
  return <ResultItem title="Example 1" />;
};

export const WithLongTitle = () => {
  return (
    <ResultItem
      title="This is a very long title that should wrap to multiple lines"
      icon={<FaClock />}
    />
  );
};
