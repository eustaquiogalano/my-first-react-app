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

export { NamedSample, EmailInput };
