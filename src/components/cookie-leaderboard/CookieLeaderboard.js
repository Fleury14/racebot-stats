import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllRacers } from '../../redux/actions';

const mapStateToProps = state => ({
  allRacerData: state.botData.allRacerData,
});

const mapActionsToProps = dispatch => ({
  grabRacerData() {
    dispatch(getAllRacers());
  }
});

class CookieLeaderboard extends Component {
  state = {
    userData: null
  };

  componentDidMount() {
    this.props.grabRacerData();
    this.setState({ userData: this.props.allRacerData });
  }

  render() {
    console.log('leaderboard state', this.state);
    console.log('leaderboard props', this.props);
    return (
      <h1>COOKIE LEADERBOARD</h1>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CookieLeaderboard);
