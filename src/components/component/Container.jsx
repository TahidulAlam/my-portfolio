/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Container = ({ children, newClass }) => {
  const className = ["max-w-6xl", "mx-auto"];
  if (newClass) {
    className.push(newClass);
  }
  return <div className={className.join(" ")}>{children}</div>;
};
export default Container;
