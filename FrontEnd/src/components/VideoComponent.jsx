import React from "react";

const VideoComponent = ({ videoPath, styling }) => {
  return (
    <video className={styling} autoPlay muted controls>
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
