var React = require('react');
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a HelloBox.
      </div>
    );
  }
});
/*
var TodoTextInput = React.createClass({
  handleChange: function(e) {
    // var item = React.findDOMNode(this.refs.item).value.trim();
    var item;
    if (e.keyCode === 13) {
      item = React.findDOMNode(this.refs.item).value.trim();
      this.props.onItemAdd(item);
      React.findDOMNode(this.refs.item).value = '';
    }
    // this.props.onItemAdd('todo item');
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="item" onKeyUp={this.handleChange} />
      </div>
    )
  }
});

var TodoList = React.createClass({
  render: function() {
    var _this = this;
    var items = this.props.items;
    var itemNode = Object.keys(items).map(function(id) {

      // console.log(this.props.items, id);
      return (
        <TodoItem item={items[id]} onRemove={_this.props.onRemove} />
      )
    });
    return (
      <ul>{itemNode}</ul>
    )
  }
});
var TodoItem = React.createClass({
  _remove: function() {
    console.log(this.props.item.id);
    this.props.onRemove(this.props.item.id);
    // TodoAction.destroy(id);
  },
  render: function() {
    return (
      <li onClick={this._remove}>{this.props.item.text}</li>
    )
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: JSON.parse(localStorage.items || "{}")}
  },
  addItem: function(text) {
    var items = this.state.items;
    var id = guid();
    items[id] = {
      id: id,
      text: text
    };
    localStorage.items = JSON.stringify(items);
    this.setState({items: items})
  },
  removeItem: function(id) {
    var items = this.state.items;
    delete items[id];
    localStorage.items = JSON.stringify(items);
    this.setState({items: items});
  },
  render: function() {
    console.log('todoApp render');
    return (
      <div>
        <TodoTextInput onItemAdd={this.addItem} />
        <TodoList items={this.state.items} onRemove={this.removeItem} />
      </div>
    )
  }
});

// React.render(<TodoApp />, document.getElementById('react-todo'));

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
console.log('todo');*/
/*
var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello World</div>
    )
  }
});*/
module.exports = CommentBox;