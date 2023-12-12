/* eslint-disable no-unused-vars */
import React from "react";
import "./Animation.css";
import { TypeAnimation } from "react-type-animation";
const Animation = () => {
  return (
    <div>
      <TypeAnimation
        // sequence={[
        //   "consle.log('Hi I am Tahidul Alam')",
        //   1000,
        //   "consle.log('')",
        //   1000,
        //   "consle.log('')",
        //   1000,
        //   "consle.log('')",
        //   1000,
        // ]}
        sequence={[
          500,
          "consle.log('Hi I am Tahidul Alam')", // initially rendered starting point
          1000,
          "consle.log('Hi I am Web Developer')",
          // 1000,
          // "consle.log('Hi I love JavaScript')",
          // 1000,
          // "consle.log('Hi I love problem solving')",
          // 500,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Animation;
