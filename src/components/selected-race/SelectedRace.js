import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getSingleRaceData } from '../../redux/actions';
import { Navbar, LoadingModal } from '..';
import './SelectedRace.scss';

const mapStateToProps = state => ({
  raceData: state.botData.singleRaceData,
  loading: state.botData.loading,
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
    loading: false,
  }

  componentDidMount() {
    console.log('mounting');
    this.props.getRaceData(this.props.match.params.race);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('nextprops', nextProps, 'prevstate', prevState)
    if (nextProps.match.params.race !== prevState.currentRace) {
      nextProps.getRaceData(nextProps.match.params.race);
      return { currentRace: nextProps.match.params.race, loading: nextProps.loading };
    }

     if ((prevState.raceData && prevState.raceData.id !== nextProps.raceData.id) || (!prevState.raceData && nextProps.raceData)) {
      return { raceData: nextProps.raceData, loading: nextProps.loading };
    }

    if (nextProps.loading !== prevState.loading) {
      return { loading: nextProps.loading }
    }
    return null;
  }

  render() {
    const { raceData, loading } = this.state;
    const dataCreated = raceData ? new Date(raceData.details.created) : null;
    return (
      <div className="race-stats-container">
        <Navbar />
        {loading && <LoadingModal />}
        <div className="race-stats-body p-5">
          {raceData && !loading && (
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
