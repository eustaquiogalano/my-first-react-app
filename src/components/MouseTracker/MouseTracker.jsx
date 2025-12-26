import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function mousePosition(e) {
    console.log("here");

    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", mousePosition);
    return () => window.removeEventListener("mousemove", mousePosition);
  }, []);

  return (
    <div>
      <p>
        X - {x}
        <br />Y - {y}
      </p>
    </div>
  );
}

export default MouseTracker;
