import React, { useState, useEffect } from "react";

const RotatingText = () => {
  const phrases = ["AI Monitoring", "Neurofeedback","Game Training"];
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [isStatic, setIsStatic] = useState(true);
  const [isReadyToRotate, setIsReadyToRotate] = useState(false);

  useEffect(() => {
    const staticTimeoutId = setTimeout(() => {
      setIsStatic(false);
      setIsReadyToRotate(true);
      setVisibleIndex(0);
    }, 3000);

    const intervalId = setInterval(() => {
      if (isReadyToRotate) {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, 3000);

    return () => {
      clearTimeout(staticTimeoutId);
      clearInterval(intervalId);
    };
  }, [isReadyToRotate]);

  return (
    <h1 className="title display-one">
      UNLOCK COGNITIVE POTENTIAL BY
      <br />
      <span className="header-caption">
        <span className="cd-headline rotate-1">
          <span className="cd-words-wrapper">
            {isStatic ? (
              <b className="is-visible theme-gradient">AI Interview</b>
            ) : (
              phrases.map((phrase, index) => (
                <b
                  key={index}
                  className={`theme-gradient ${
                    visibleIndex === index ? "is-visible" : "is-hidden"
                  }`}
                >
                  {phrase}
                </b>
              ))
            )}
          </span>
        </span>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h1>
  );
};

export default RotatingText;