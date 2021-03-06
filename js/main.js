'use strict';

require('../css/style.css');
let React = require('react');
let TodoAction = require('./actions/TodoAction');







/* way to broke React. Event Delegate
var c = document.querySelector('#content');

c.addEventListener('click', function(e) {
  e.stopPropagation();
});*/
/*
let render = (route) => {
  TodoAction.receiveAll(route);
  React.render(<Todo route={route} />, document.getElementById('todoapp'));
};

render(global.location.hash.substr(2));


global.addEventListener('hashchange', () => {
  render(global.location.hash.substr(2));
});
*/

let Router = require('react-router');
let {Route, DefaultRoute, RouteHandler} = Router;

let Todo = require('./components/Todo');

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <RouteHandler />
    );
  }
}

let routes = (
  <Route path="/" handler={App}>
    <Route path="/:router" handler={Todo}></Route>
    <DefaultRoute handler={Todo} />
  </Route>
);



Router.run(routes, (Root, state) => {
  TodoAction.receiveAll(state.params.router);
  React.render(<Root />, document.getElementById('todoapp'));
});

global.React = React;
global.P = require('./Adehun.js');
global.test = function() {
  function doSomething() {
    console.log('doSomething(): start');
    var deferred = P.deferred();
    setTimeout(function() {
      console.log('doSomething(): end');
      deferred.resolve();
    }, 1000);
    return deferred.promise;
  }

  function doSomethingElse() {
    console.log('doSomethingElse(): start');
    var deferred = P.deferred();
    setTimeout(function() {
      console.log('doSomethingElse: end');
      deferred.resolve();
    }, 1000);
    return deferred.promise;
  }

  function finalHandler() {
    console.log('finalHandler(): start');
    var deferred = P.deferred();
    setTimeout(function() {
      console.log('finalHandler(): end');
      deferred.resolve();
    }, 1000);
    return deferred.promise;
  }
  doSomething().then(doSomethingElse).then(finalHandler);
}

