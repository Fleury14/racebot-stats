import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './CurrentRaces.scss';

const renderRaceRow = (race, index) => {
  const startDate = new Date(race.created);
  return (
    <Row key={race.key} className={`current-races-body ${index % 2 === 0 ? 'current-races-stripe' : ''}`}>
      <Col>
        <Link to={`/race/${race.key}`}>{race.key}</Link>
      </Col>
      <Col className="current-races-hide-mobile">{race.guild.name}</Col>
      <Col className="current-races-hide-mobile">{race.async ? 'Yes' : 'No'}</Col>
      <Col>{race.entrants.length}</Col>
      <Col>{startDate.toLocaleString()}</Col>
      <Col className="current-races-hide-mobile">{race.mode}</Col>
    </Row>
  );
}

const CurrentRaces = (props) => {
  const { data } = props;
  return (
    <div className="current-races-container open-sans">
      <h1 className="text-center text-uppercase">Current Races</h1>
      {/* <p>Number of races running: { data.length }</p> */}
      <Container>
        <Row className="current-races-header">
          <Col>Tag</Col>
          <Col className="current-races-hide-mobile">Location</Col>
          <Col className="current-races-hide-mobile">Async?</Col>
          <Col>Entrants</Col>
          <Col>Time Started</Col>
          <Col className="current-races-hide-mobile">Mode</Col>
        </Row>
          {data.map((race, index) => renderRaceRow(race, index))}
      </Container>
    </div>
  );
};

export default CurrentRaces;
