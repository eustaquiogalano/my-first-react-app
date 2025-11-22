function ListItem(props) {
  return <li>{props.name}</li>;
}

function List(props) {
  if (!props.names) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  if (props.names.length === 0) {
    return (
      <div>
        <p>The list is empty.</p>
      </div>
    );
  }
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
