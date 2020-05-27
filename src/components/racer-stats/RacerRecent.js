import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetRaceInfo } from '../../helpers';
import './RacerStats.scss';

const mapStateToProps = state => ({
  generalData: state.botData.data,
});

class RacerRecents extends Component {
  state = {
    raceData: null,
  };

  componentDidMount() {
    const last5Data = GetRaceInfo(this.props.last5, this.props.generalData);
    if (last5Data) {
      this.setState({ raceData: last5Data });
    }
  }

  render() {
    console.log('stizzate', this.state);
    return (
      <div className="racer-history">
        <h2 className="text-center">RECENT RESULTS</h2>
      </div>
    );
  }
}

// export default RacerRecents;
export default connect(mapStateToProps, null)(RacerRecents);