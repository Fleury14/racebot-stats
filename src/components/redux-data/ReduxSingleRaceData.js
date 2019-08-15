import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleRaceData } from '../../redux/actions';

const mapStateToProps = state => ({
  raceData: state.botData.singleRaceData,
  loading: state.botData.loading,
});

const mapActionsToProps = dispatch => ({
  getRaceData(key) {
    dispatch(getSingleRaceData(key))
  }
});

// expects a prop "raceName" to hit the database with

class ReduxSingleRaceData extends Component {
  state = {
    raceData: null,
    loading: false,
    selectedRace: null,
  }

  componentDidMount() {
    const { raceName, raceData } = this.props;
    // check to see if existing data in redux matches current race selected
    // if so, then we don't need to call the API again
    if (!this.state.raceData && raceData && raceData.key && raceData.key === raceName) {
      this.setState({ selectedRace: raceData.key, raceData });
    } else {
      // if not, lets hit the API
      this.props.getRaceData(raceName);
    }
  }

  componentDidUpdate() {
    if (this.props.loading !== this.state.loading) {
      this.setState({ loading: this.props.loading })
    } else if (this.state.selectedRace !== this.props.raceData.key) {
      this.setState({ selectedRace: this.props.raceData.key, raceData: this.props.raceData });
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.children(this.state)}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxSingleRaceData);