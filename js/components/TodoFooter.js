'use strict';
let React = require('react');
let cx = require('../utils/util').cx;

class TodoFooter extends React.Component {
  constructor(props) {
    super(props);
    // super();  
  }
  render() {
    return (
      <footer className="todo__footer">
        <span id="todo-count">
          <strong>{this.props.count}</strong> items left
        </span>
        <ul id="filters">
          <li>
            <a
              href="#/"
              className={cx({selected: this.props.now === 'all'})}>
                All
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/active"
              className={cx({selected: this.props.now === 'active'})}>
                Active
            </a>
          </li>
          {' '}
          <li>
            <a
              href="#/completed"
              className={cx({selected: this.props.now === 'completed'})}>
                Completed
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

TodoFooter.propTypes = {
  count: React.PropTypes.number,
  now: React.PropTypes.string
};
TodoFooter.defaultProps = {
  count: 0,
  now: 'all'
};

module.exports = TodoFooter;