function ListItem(props) {
  return <li>{props.name}</li>;
}

function List(props) {
  return (
    <ul>
      {props.names.map((name) => {
        return <ListItem name={name} />;
      })}
    </ul>
  );
}

export { List };
