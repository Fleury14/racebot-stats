import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getSingleRaceData } from '../../redux/actions';
import { Navbar } from '..';
import './SelectedRace.scss';

const mapStateToProps = state => ({
  raceData: state.botData.singleRaceData,
});

const mapActionsToProps = dispatch => ({
  getRaceData(key) {
    dispatch(getSingleRaceData(key))
  }
});

class SelectedRace extends Component {
  state = {
    raceData: null,
    currentRace: null,
  }

  componentDidMount() {
    this.props.getRaceData(this.props.match.params.race);
    console.log('getting race data');
    this.setState({ raceData: this.props.raceData, currentRace: this.props.match.params.race });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.raceData && prevState.raceData.key && prevState.raceData.key !== this.state.currentRace) {
      this.setState({ raceData: prevProps.raceData });
    } else if (prevProps.raceData && !this.state.raceData) {
      this.setState({ raceData: prevProps.raceData });
    }
  }

  static async getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.race !== prevState.currentRace) {
      await nextProps.getRaceData(nextProps.match.params.race);
      return { raceData: nextProps.raceData, currentRace: nextProps.match.params.race };
    }
    return null;
  }

  render() {
    const { raceData } = this.state;
    console.log('state', this.state, 'props', this.props);
    const dataCreated = raceData ? new Date(raceData.details.created) : null;
    return (
      <div className="race-stats-container">
        <Navbar />
        <div className="race-stats-body p-5">
          {raceData && (
            <div className="race-stats-top-bubble">
              <h1 className="text-uppercase">{raceData.key}</h1>
              <p className="text-center">Created by {raceData.details.creator && raceData.details.creator.name ? raceData.details.creator.name : "????"} on {dataCreated.toLocaleDateString()} at {dataCreated.toLocaleTimeString()} </p>
              {raceData.details.metadata && raceData.details.metadata.Url && (
                <a href={raceData.details.metadata.Url} target="_blank" rel="noreferrer noopener">
                  <p className="text-center">{raceData.details.metadata.Url}</p>
                </a>
              )}
              <Container fluid>
                <Row>
                  <Col md="4" className="race-stats-left-col">
                    <h4 className="text-center text-uppercase">{raceData.details.guild.name}</h4>
                    <div className="d-flex justify-content-center">
                      <p className="mr-2">Async:</p>
                      <p className={'ml-2 ' + raceData.details.async ? 'green-text' : 'red-text'}>{raceData.details.async ? 'Yes' : 'No'}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="mr-2">Mode:</p>
                      <p className="ml-2">{raceData.details.mode}</p>
                    </div>
                  </Col>
                  <Col md="4" className="race-stats-mid-col">
                    <h4 className="text-center text-uppercase">FLAGS</h4>
                    {raceData.details.metadata && raceData.details.metadata.Flags ? <p>{raceData.details.metadata.Flags}</p> : '????'}
                    <h6 className="text-center text-uppercase">{raceData.details.status}</h6>
                  </Col>
                  <Col md="4" className="race-stats-entrants">
                    <h3 className="text-uppercase text-center">{raceData.details.entrants.length} entrants</h3>
                    <ul>
                      {raceData.details.entrants.map(entrant => {
                        return (
                          <Link to={`../racer/${entrant.name}`} key={entrant.id}>
                            <li className="text-center">{entrant.name}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
          {raceData && raceData.details && raceData.details.finishers && raceData.details.finishers.length > 0 && (
            <div className="race-stats-finisher-bubble">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Racer</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {raceData.details.finishers.map(finisher => {
                    return (
                      <tr key={finisher.id}>
                        <th>{finisher.placement}</th>
                        <td>
                          <Link to={`../racer/${finisher.name}`}>
                            {finisher.name}
                          </Link>  
                        </td>
                        <td className="finish-time">{finisher.finish}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SelectedRace);
