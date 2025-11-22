function ListItem(props) {
  return <li>{props.name}</li>;
}

function List(props) {
  return (
    <ul>
      {props.names.map((name) => {
        // only render name with length 4
        return name.length === 4 ? <ListItem name={name} /> : null;
      })}
      <br />
      {props.names.map((name) => {
        // only render name starts with letter M
        return name.startsWith("M") && <ListItem name={name} />;
      })}
    </ul>
  );
}

export { List };
