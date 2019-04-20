import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleRaceData } from '../../redux/actions';

const mapStateToProps = state => ({
  raceData: state.botData.singleRaceData,
});

const mapActionsToProps = dispatch => ({
  getRaceData(key) {
    dispatch(getSingleRaceData(key))
  }
});

class SelectedRace extends Component {
  state ={
    raceData: null,
  }

  componentDidMount() {
    console.log('param', this.props.match.params.race);
    this.props.getRaceData(this.props.match.params.race);
    this.setState({ raceData: this.props.raceData });
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <h1>Selected Race</h1>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SelectedRace);
