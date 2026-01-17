import React, { useState, useEffect } from "react";

function MouseCirclePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -50,
          top: -50,
          width: 10,
          height: 10,
        }}
      />
      <div>
        <ul className="apostles">
          <li>Peter</li>
          <li>Mark</li>
          <li>James</li>
          <li>Luke</li>
        </ul>
      </div>
    </>
  );
}

export default MouseCirclePointer;
