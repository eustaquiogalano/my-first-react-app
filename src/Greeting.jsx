export default function Pagbati() {
  return <button>&qout;Pagbati mula sa Pilipinas at sa mundo&qout;</button>;
}

function NamedSample() {
  return <button>Another sample for named export</button>;
}

function EmailInput() {
  return (
    <div>
      <label htmlFor="user-email">Email:</label>
      <input type="email" id="user-email" />
    </div>
  );
}

function App2() {
  const savior = "Jesus Christ";

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Our savior, {savior}.</h1>
    </div>
  );
}

export { NamedSample, EmailInput, App2 };
