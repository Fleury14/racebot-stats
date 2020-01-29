import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../redux/actions';

const mapStateToProps = state => ({
  loading: state.botData.loading,
  error: state.botData.error,
  events: state.botData.events
});

const mapActionsToProps = dispatch => ({
  getAllEvents() {
    dispatch(getEvents())
  }
});

class ReduxEventsData extends Component {
  state = {
    events: null,
    loading: false,
  }

  componentDidMount() {
    // for now, get all events upon component load, we'll worry about caching later
    this.props.getAllEvents();
  }

  componentDidUpdate() {
    if (this.props.loading != this.state.loading) {
      this.setState({ events: this.props.events, loading: this.props.loading });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.state)}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxEventsData);