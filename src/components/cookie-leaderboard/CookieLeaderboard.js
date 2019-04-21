import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRacers } from '../../redux/actions';
import { GetCookieLeaders } from '../../helpers';
import './CookieLeaderboard.scss';

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
    if (this.props.allRacerData && this.props.allRacerData.items) {
      this.setState({ userData: GetCookieLeaders(this.props.allRacerData.items) });
    }
  }

  render() {
    console.log('leaderboard state', this.state);
    console.log('leaderboard props', this.props);
    const { userData } = this.state;
    return userData ? (
      <div className="cookie-leaderboard-container">
        <h1 className="text-center">COOKIE LEADERBOARD</h1>
        <ol>
          {userData.map(user => {
            return (
              <li key={user.id}>
                <span className="ml-3 mr-3 cookie-number">{user.cookies}</span>
                <Link to={`racer/${user.name}`}>
                  <span className="cookie-name">{user.name}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    ) : null;
  }
}

export default connect(mapStateToProps, mapActionsToProps)(CookieLeaderboard);
