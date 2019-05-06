import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, RacerStats, SelectedRace, RaceDirectory, PlayerDirectory } from '../components'
// import Main from '../components/main/Main';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/racer/:racer" exact component={RacerStats} />
        <Route path="/race/:race" exact component={SelectedRace} />
        <Route path="/race-directory" exact component={RaceDirectory} />
        <Route path="/player-directory" exact component={PlayerDirectory} />
      </Router>
    );
  }
}

export default AppRouter;
