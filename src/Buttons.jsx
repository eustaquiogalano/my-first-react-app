export function Button({ text = "Click Me", fontSize = 12, color }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

Button.defaultProps = {
  color: "blue",
};
