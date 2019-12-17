import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeaturedRacers } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    botData: state.botData,
    loading: state.botData ? state.botData.loading : false,
  }
}

const mapActionsToProps = dispatch => ({
  getFeatured() {
    dispatch(getFeaturedRacers());
  }
});

class ReduxFeaturedData extends Component {
  state = {
    featuredData: null,
  }

  componentDidMount() {
    this.props.getFeatured();
  }

  componentDidUpdate() {
    if (this.props.botData && this.props.botData.featuredRacers && this.props.botData.featuredRacers !== this.state.featuredData) {
      this.setState({ featuredData: this.props.botData.featuredRacers });
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

export default connect(mapStateToProps, mapActionsToProps)(ReduxFeaturedData)