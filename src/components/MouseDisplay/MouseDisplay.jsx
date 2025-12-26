import React, { useState } from "react";
import MouseTracker from "../MouseTracker/MouseTracker";

function MouseDisplay() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MouseTracker />}
    </div>
  );
}

export default MouseDisplay;
