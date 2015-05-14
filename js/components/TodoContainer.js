let React = require('react');
let TodoStore = require('../stores/TodoStore');
let TodoAction = require('../actions/TodoAction');
let guid = require('../utils/util').guid;

let Todo = require('../components/Todo');

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }
  componentWillMount() {
    this.setState({todos: TodoStore.getItems()});
  }
  componentDidMount() {
    TodoStore.on('change', this.updateState.bind(this));
  }
  render() {
    return (
      <Todo todos={this.state.todos} addTodo={this.addTodo} now={this.props.params.router}/>
    );
  }
  updateState() {
    this.setState({todos: TodoStore.getItems()});
  }
  addTodo(text) {
    TodoAction.add({id: guid(), text: text, completed: false});
  }
}

module.exports = TodoContainer;