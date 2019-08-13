import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, RacerStats, SelectedRace, RaceDirectory, PlayerDirectory, ErrorComponent, FlagStats } from '../components'
// import Main from '../components/main/Main';

class AppRouter extends Component {
  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/flag-stats" exact component={FlagStats} />
          <Route path="/racer/:racer" exact component={RacerStats} />
          <Route path="/race/:race" exact component={SelectedRace} />
          <Route path="/race-directory" exact component={RaceDirectory} />
          <Route path="/player-directory" exact component={PlayerDirectory} />
          <Route component={ErrorComponent} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
