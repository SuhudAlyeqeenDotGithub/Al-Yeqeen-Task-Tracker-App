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
    <p
      className={`flex p-2 md:text-center font-extrabold xl:text-[45px] text-[30px] duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 scale-95"
      }`}
    >
      {textArray[textIndex]}
    </p>
  );
};

export default Carousel;
