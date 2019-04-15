import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../components/main/Main';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    );
  }
}

export default AppRouter;
