import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEntrants, getRaces } from '../../redux/actions';

const mapStateToProps = state => ({
  loading: state.siren.loading,
  error: state.siren.loading,
  entrants: state.siren.entrants,
  races: state.siren.races,
});

const mapActionsToProps = dispatch => ({
  getSirenEntrants() {
    dispatch(getEntrants())
  },
  getSirenRaces() {
    dispatch(getRaces())
  }
});





class ReduxSirenData extends Component {
  state = {
    entrants: null,
    races: null,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.props.getSirenEntrants();
    this.props.getSirenRaces();
  }
  
  componentDidUpdate() {
    // check for any diffs
    if (
      this.props.loading !== this.state.loading ||
      this.props.error !== this.state.error ||
      this.props.entrants !== this.state.entrants ||
      this.props.races !== this.state.races
    ) {
      this.setState({
        loading: this.props.loading,
        error: this.props.error,
        entrants: this.props.entrants,
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