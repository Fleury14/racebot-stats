import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBotData } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    botData: state.botData,
    loading: state.botData ? state.botData.loading : false,
  }
}

const mapActionsToProps = dispatch => ({
  getData() {
    dispatch(getBotData());
  }
});

class ReduxMainData extends Component {
  state = {
    botData: this.props.botData.data,
    loading: this.props.loading,
    time: null,
  };

  componentDidMount() {
    // check the date time of current data. If it either doesn't have one, or it is more than the timelimit in the env, make a new call
    if (this.props.botData && this.props.botData.data && this.props.botData.data.dataTime) {
    }
    if (!this.props.botData.data || !this.props.botData.data.dataTime || Date.now() - parseInt(this.props.botData.data.dataTime) > process.env.REACT_APP_API_DATA_THRESHOLD_IN_SECS * 1000) {
      this.props.getData();
    }
  }

  componentDidUpdate() {
    // any time loading is true, we shouldn't have any data to store in state
    if (this.props.loading !== this.state.loading) {
      this.setState({ loading: this.props.loading })
    } else {
      // update the state when one of the two conditions are true:
      // 1. theres no current time in state (assuring data will be set once)
      // 2. the time in state and the time in props is different
      if (this.props.botData && this.props.botData.data && this.props.botData.data.dataTime && (!this.state.time || this.props.botData.data.dataTime !== this.state.time)) {
        this.setState({ botData: this.props.botData.data, time: this.props.botData.data.dataTime });
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

export default connect(mapStateToProps, mapActionsToProps)(ReduxMainData);