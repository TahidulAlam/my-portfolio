/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";

const ClockApi = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const outlineStyles = useMemo(
  //   () => ({
  //     WebkitTextStroke: "1px black",
  //     textShadow: "0 0 3px black",
  //   }),
  //   []
  // );

  return (
    <>
      <h1 className="mb-4 text-base font-extrabold dark:tracking-tight leading-none md:text-5xl lg:text-base dark:text-white text-blue-950">
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: true,
        })}
      </h1>
    </>
  );
};

export default ClockApi;
