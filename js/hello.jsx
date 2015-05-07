var React = require('react');

var Hello = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        Hello, <input type="text" placeholder="your name here!" />
        It is {this.props.date.toLocaleString()}
      </div>
    );
  }
});

module.exports = Hello;