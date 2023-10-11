import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './omg.scss';

const OMGAsyncView = (props) => {

  const { races, data } = props;

  if (!races || !races.length) return null;

  const [current, setCurrent] = useState(races[0])

  const currentRace = data.find(race => race.key === current );
  if (!currentRace) {
    console.log('unable to find data for race:', current);
    return null;
  }

  currentRace.entrants.sort((a, b) => {
    const aRank = isNaN(a.placement) ? 99 : a.placement;
    const bRank = isNaN(b.placement) ? 99 : b.placement;
    return a.placement - b.placement;
  })

  return (
    <Container>
      <Row>
        {races.map(race => {
          return (
            <Col md="2" key={race}>
              <button className={`omg-button ${race === current ? 'omg-active' : ''}`} onClick={() => setCurrent(race)}>
                {race}
              </button>
            </Col>)
        })}
      </Row>
      <Row className="omg-title-row">
        <Col md="1">Rank</Col>
        <Col md="6">Name</Col>
        <Col md="5">Time</Col>
      </Row>
      {currentRace.entrants.map((entrant, index) => {
        return (
          <Row key={entrant.name}>
            <Col md="1">{index + 1}</Col>
            <Col md="6">{entrant.name}</Col>
            <Col md="5">{entrant.finish}</Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default OMGAsyncView