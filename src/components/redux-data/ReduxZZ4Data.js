import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getZz4Races } from '../../redux/actions';

const mapStateToProps = state => ({
  loading: state.siren.loading,
  error: state.siren.loading,
  races: state.siren.races,
  zz4: state.siren.zz4
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
    zz4: null,
  }

  componentDidMount() {
    this.props.getSirenZZ4Races();
  }
  
  componentDidUpdate() {
    // check for any diffs
    if (
      this.props.loading !== this.state.loading ||
      this.props.error !== this.state.error ||
      this.props.zz4 !== this.state.zz4
    ) {
      this.setState({
        loading: this.props.loading,
        error: this.props.error,
        zz4: this.props.zz4,
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