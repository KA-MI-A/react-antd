import React from 'react';

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', array: false };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          {/* onSubmit:wwwww */}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?  
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            {/* onSubmit:wwwww */}
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange=(e)=> {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {

    render() {
      const { items } = this.props
      return (
        <ul>
          {items && items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  export default Todo
