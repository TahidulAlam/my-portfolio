// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.scss";
import Arrow from "../../shared/arrow";

// eslint-disable-next-line react/prop-types
const Showcase = ({ data, transition }) => {
  // {data, transition}
  return (
    <div className="projects-showcase">
      {/* eslint-disable-next-line react/prop-types */}
      {data.map((project) => (
        <div
          key={project.id}
          className={`showCase-item ${
            transition === "zoomOut"
              ? "zoomOut"
              : transition === "zoomIn"
              ? "zoomIn"
              : " "
          }`}
        >
          <div className="meta-content">
            <div className="project-title">{project.name}</div>
            <div className="go-to_cta">
              <span className="text">
                <Arrow />
              </span>
            </div>
          </div>
          <img src={project.media.thumbnail} />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
