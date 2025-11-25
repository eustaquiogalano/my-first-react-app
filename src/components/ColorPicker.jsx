import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  // higher-order function - function that returns a function
  function onButtonClick(color) {
    return () => {
      setBackgroundColor(color);
      document.body.style.backgroundColor = color;
    };
  }
  return (
    <div style={{ backgroundColor }}>
      {COLORS.map((color) => {
        return (
          <button type="button" key={color} onClick={onButtonClick(color)}>
            {color}
          </button>
        );
      })}
    </div>
  );
}

export { ColorPicker };
