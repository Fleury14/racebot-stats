import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { GetRaceInfo } from '../../helpers';
import './RacerStats.scss';

const mapStateToProps = state => ({
  generalData: state.botData.data,
});

class RacerRecents extends Component {
  state = {
    raceData: null,
  };

  removeFractions(timeString) {
    const period = timeString.indexOf('.');
    if (period < 0) return timeString;
    return timeString.slice(0, period);
  }

  componentDidMount() {
    const last5Data = GetRaceInfo(this.props.last5, this.props.generalData);
    if (last5Data) {
      this.setState({ raceData: last5Data });
    }
  }

  render() {
    const { raceData } = this.state;
    const { id } = this.props;
    return (
      <div className="racer-history">
        <h2 className="text-center">RECENT RESULTS</h2>
        {raceData && raceData.length ? (
          <Table>
            <thead>
              <tr>
                <th>Race</th>
                <th>Entrants</th>
                <th>Rank</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {raceData.map(race => {
                const myResults = race.details.entrants.find(entrant => entrant.id === id);
                return (
                  <tr key={race.key}>
                    <td>{race.key}</td>
                    <td>{race.details.entrants.length}</td>
                    <td>{myResults.placement}</td>
                    <td>{this.removeFractions(myResults.finish)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    );
  }
}

// export default RacerRecents;
export default connect(mapStateToProps, null)(RacerRecents);