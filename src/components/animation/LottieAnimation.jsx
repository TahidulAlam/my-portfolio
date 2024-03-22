/* eslint-disable no-unused-vars */
import React from "react";
import animationData from "./Animation - 1702478535623.json";
import Lottie from "lottie-react";
const LottieAnimation = () => {
  const isSmallScreen = window.innerWidth <= 768;
  const animationStyle = {
    width: isSmallScreen ? "350px" : "550px",
    height: isSmallScreen ? "350px" : "550px",
  };
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={animationStyle}
      />
    </div>
  );
};

export default LottieAnimation;
