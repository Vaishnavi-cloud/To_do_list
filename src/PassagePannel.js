import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";
import "./index.css";

const PassagePanel = () => {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  // Step 2: Handle Thumbs Up Click
  const handleThumbsUpClick = () => {
    if (!thumbsUpClicked && !thumbsDownClicked) {
      setThumbsUpClicked(true);
    }
  };

  // Step 3: Handle Thumbs Down Click
  const handleThumbsDownClick = () => {
    if (!thumbsUpClicked && !thumbsDownClicked) {
      setThumbsDownClicked(true);
    }
  };

  return (
    <div className="feedbackContainer">
      <div
        className={`thumbsUp ${thumbsUpClicked ? "clicked" : ""}`}
        onClick={handleThumbsUpClick}
        onKeyDown={(e) => e.key === "Enter" && handleThumbsUpClick()}
        role="button"
        tabIndex={0}
      >
        <FaRegThumbsUp
          style={{ color: thumbsUpClicked ? "green" : "inherit" }}
        />
      </div>
      <div
        className={`thumbsDown ${thumbsDownClicked ? "clicked" : ""}`}
        onClick={handleThumbsDownClick}
        onKeyDown={(e) => e.key === "Enter" && handleThumbsDownClick()}
        role="button"
        tabIndex={0}
      >
        <FaRegThumbsDown
          style={{ color: thumbsDownClicked ? "red" : "inherit" }}
        />
      </div>
    </div>
  );
};

export default PassagePanel;
