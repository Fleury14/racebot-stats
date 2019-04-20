import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, RacerStats } from '../components'
// import Main from '../components/main/Main';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/racer/:racer" exact component={RacerStats} />
      </Router>
    );
  }
}

export default AppRouter;
