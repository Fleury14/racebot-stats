import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RacerStats.scss';

const mapStateToProps = state => ({
  racerData: state.botData.racerData,
  generalData: state.botData.data,
  currentRacer: null,
  loading: state.botData.loading,
});

class RacerRecents extends Component {
  render() {
    console.log('general data', this.props.generalData);
    return (
      <div className="racer-history">
        <h2 className="text-center">RECENT RESULTS</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(RacerRecents);