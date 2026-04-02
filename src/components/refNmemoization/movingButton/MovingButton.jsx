import React, { useRef, useState } from "react";

function MovingButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const buttonRef = useRef(null);

  const handleAnimation = () => {
    setIsAnimating(true);
    buttonRef.current.style.transform = "translate(300px, 300px)";
    buttonRef.current.style.transition = "all 1s ease-in-out";

    setTimeout(() => {
      setIsAnimating(false);
      buttonRef.current.style.transform = "";
    }, 1000);
  };

  return (
    <div>
      <p>{isAnimating ? "Animation on-going" : "Animation stopped"}</p>
      <button onClick={handleAnimation} ref={buttonRef}>
        Start animation
      </button>
    </div>
  );
}

export default MovingButton;
