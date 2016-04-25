import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import Home from './Home';
import About from './About';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="about" component={About}></Route>
      </Router>
    )
  }
}
