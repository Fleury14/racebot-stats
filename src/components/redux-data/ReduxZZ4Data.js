import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getZz4Races } from '../../redux/actions';

const mapStateToProps = state => ({
  loading: state.siren.loading,
  error: state.siren.loading,
  races: state.siren.races,
});

const mapActionsToProps = dispatch => ({
  getSirenZZ4Races() {
    dispatch(getZz4Races())
  }
});





class ReduxSirenData extends Component {
  state = {
    races: null,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.props.getSirenZZ4Races();
  }
  
  componentDidUpdate() {
    // check for any diffs
    if (
      this.props.loading !== this.state.loading ||
      this.props.error !== this.state.error ||
      this.props.races !== this.state.races
    ) {
      this.setState({
        loading: this.props.loading,
        error: this.props.error,
        races: this.props.races,
      })
    }
  }

  render() {
    return (
      <>
        {this.props.children(this.state)}
      </>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxSirenData);