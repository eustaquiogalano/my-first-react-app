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
  return (
    <div>
      <h1>Inside h1</h1>
      <h2>Inside h2</h2>
    </div>
  );
}

export { NamedSample, EmailInput, App2 };
