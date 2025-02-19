import React, { useEffect, useState } from "react";

const Carousel = ({ textArray, duration }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex === textArray.length - 1 ? 0 : prevIndex + 1));
        setIsVisible(true); // Show new text after the transition
      }, 400);
    }, duration);
    return () => clearInterval(interval);
  }, []);
  return (
    <p className={`flex justify-center p-2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 scale-95"}`}>
      {textArray[textIndex]}
    </p>
  );
};

export default Carousel;
