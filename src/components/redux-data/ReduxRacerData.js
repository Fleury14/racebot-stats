import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllRacers } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    racerData: state.botData.allRacerData,
    loading: state.botData ? state.botData.loading : false,
    // note: add .items if using old api
  }
}

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getAllRacers())
  }
});

class ReduxRacerData extends Component {
  state = {
    racerData: null,
    time: null,
    loading: false,
  }

  componentDidMount() {
        // check the date time of current data. If it either doesn't have one, or it is more than the timelimit in the env, make a new call
        if (!this.props.racerData || !this.props.racerData.dataTime || Date.now() - parseInt(this.props.racerData.dataTime) > process.env.REACT_APP_API_DATA_THRESHOLD_IN_SECS) {
          this.props.getData();
        } else if (!this.state.time) {
          // if the data is valid but there's no time set in state, then this must be the initial run, so we can adjust the state here
          this.setState({ racerData: this.props.racerData, time: this.props.racerData.dataTime })
        }
  }

  componentDidUpdate() {
       // any time loading is true, we shouldn't have any data to store in state
       if (this.props.loading !== this.state.loading) {
        this.setState({ loading: this.props.loading })
      } else {
        if (this.props.racerData && this.props.racerData.dataTime && !this.state.time) {
          this.setState({ racerData: this.props.racerData, time: this.props.racerData.dataTime });
        }
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

export default connect(mapStateToProps, mapActionsToProps)(ReduxRacerData);
