import { List } from "./list";

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

function App2(props) {
  // const savior = "Jesus Christ";

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Our savior, {props.name}.</h1>
      <h1>Our father, {props.father}.</h1>
    </div>
  );
}

function App3() {
  const names = ["Peter", "Luke", "John", "Mathew", "Mark"];

  return (
    <>
      <List names={names} />
    </>
  );
}

export { NamedSample, EmailInput, App2, App3 };
