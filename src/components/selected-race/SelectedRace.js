import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar, LoadingModal } from '..';
import { ReduxSingleRaceData } from '../redux-data';
import './SelectedRace.scss';



const SelectedRace = (props) => {
  return (
    <ReduxSingleRaceData raceName={props.match.params.race}>
      {(reduxData) => {
        const { raceData, loading } = reduxData;
        const dataCreated = raceData ? new Date(raceData.created) : null;
        let finishers = null;
        if (raceData && raceData && raceData.entrants) {
          finishers = raceData.entrants.sort((a, b) => {
            if (a.status === 'Forfeited' && b.status === 'Forfeited') return 0;
            if (a.status === 'Forfeited' && b.status !== 'Forfeited') return 1;
            if (a.status !== 'Forfeited' && b.status === 'Forfeited') return -1;
            return a.placement - b.placement
          });
        }
        return (
          <div className="race-stats-container">
            <Navbar />
            {loading && <LoadingModal />}
            <div className="race-stats-body p-5">
              {raceData && !loading && (
                <div className="race-stats-top-bubble">
                  <h1 className="text-uppercase">{raceData.key}</h1>
                  <p className="text-center">Created by {raceData.creator && raceData.creator.name ? raceData.creator.name : "????"} on {dataCreated.toLocaleDateString()} at {dataCreated.toLocaleTimeString()} </p>
                  {raceData.metadata && raceData.metadata.Url && (
                    <a href={raceData.metadata.Url} target="_blank" rel="noreferrer noopener">
                      <p className="text-center">{raceData.metadata.Url}</p>
                    </a>
                  )}
                  <Container fluid>
                    <Row>
                      <Col md="4" className="race-stats-left-col">
                        <h4 className="text-center text-uppercase">{raceData.guild.name}</h4>
                        <div className="d-flex justify-content-center">
                          <p className="mr-2">Async:</p>
                          <p className={'ml-2 ' + raceData.async ? 'green-text' : 'red-text'}>{raceData.async ? 'Yes' : 'No'}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                          <p className="mr-2">Mode:</p>
                          <p className="ml-2">{raceData.mode}</p>
                        </div>
                        <h4 className="text-center text-uppercase">Hash</h4>
                        <p className="ml-2 text-center">{raceData.metadata.Hash}</p>
                      </Col>
                      <Col md="4" className="race-stats-mid-col">
                        <h4 className="text-center text-uppercase">FLAGS</h4>
                        {raceData.metadata && raceData.metadata.Flags ? <p>{raceData.metadata.Flags}</p> : '????'}
                        <h6 className="text-center text-uppercase">{raceData.status}</h6>
                      </Col>
                      <Col md="4" className="race-stats-entrants">
                        <h3 className="text-uppercase text-center">{raceData.entrants.length} entrants</h3>
                        <ul>
                          {raceData.entrants.map(entrant => {
                            return (
                              <Link to={`../racer/${entrant.id}`} key={entrant.id}>
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
              {finishers && !(raceData.async && raceData.status === 'Running') && (
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
                      {finishers.map(finisher => {
                        return (
                          <tr key={finisher.id}>
                            <th>{finisher.placement}</th>
                            <td>
                              <Link to={`../racer/${finisher.id}`}>
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
      }}
    </ReduxSingleRaceData>
  )
}

export default SelectedRace;
