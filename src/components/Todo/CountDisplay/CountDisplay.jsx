import { Component } from "react";

class CountDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        Todo counter: <span>{this.props.todoCount}</span>
      </p>
    );
  }
}

export default CountDisplay;
