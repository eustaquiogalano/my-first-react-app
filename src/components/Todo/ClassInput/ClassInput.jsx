import React, { Component } from "react";
import CountDisplay from "../CountDisplay/CountDisplay";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, openEdit: false, todoText: "Just some demo tasks" },
        { id: 2, openEdit: false, todoText: "As an example" },
      ],
      inputVal: "",
      resubmitValue: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
    this.resetStates = this.resetStates.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
      resubmitValue: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(index) {
    let updatedTodos = this.state.todos.filter((todo, todoIndex) => {
      if (todoIndex !== index) return todo;
    });

    this.setState((state) => ({
      ...state,
      todos: [...updatedTodos],
    }));
  }

  handleEdit(todoID) {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === todoID) {
        return { ...todo, openEdit: true };
      }

      return todo;
    });

    this.setState((state) => ({
      ...state,
      todos: updatedTodo,
    }));

    this.resetStates();
  }

  handleResubmit(todoID, newText) {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === todoID) {
        return { ...todo, todoText: newText, openEdit: false, new: "new" };
      }

      return todo;
    });

    this.setState((state) => ({
      ...state,
      todos: updatedTodo,
    }));

    this.resetStates();
  }

  resetStates() {
    this.setState((state) => ({
      ...state,
      inputVal: "",
      resubmitValue: "",
    }));
  }

  render() {
    return (
      <section>
        <CountDisplay todoCount={this.state.todos.length} />

        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.openEdit ? (
                  <input
                    type="text"
                    value={this.state.resubmitValue}
                    onChange={this.handleInputChange}
                  />
                ) : (
                  todo.todoText
                )}

                <button onClick={() => this.handleDelete(todo.id)}>
                  Delete
                </button>

                {todo.openEdit ? (
                  <button
                    onClick={() =>
                      this.handleResubmit(todo.id, this.state.resubmitValue)
                    }
                  >
                    Resubmit
                  </button>
                ) : (
                  <button onClick={() => this.handleEdit(todo.id)}>Edit</button>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
