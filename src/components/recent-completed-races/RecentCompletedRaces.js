import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RecentCompletedRaces.scss';

const RecentCompletedRaces = (props) => {
  const { data } = props;
  return (
    <div className="recently-completed-container p-5">
      <h2 className="text-uppercase">Recently Completed Races</h2>
      <Container fluid>
        <Row className="recently-completed-header">
          <Col md="3">Race</Col>
          <Col md="5">Guild</Col>
          <Col md="1">Size</Col>
          <Col md="3">Winner</Col>
        </Row>
        {data.map(eachRace => {
          const winner = eachRace.entrants.find(entrant => entrant.placement === 1);
          return (
            <Row key={eachRace.key} className="recently-completed-data-row">
              <Col md="3">
                <Link to={`/race/${eachRace.key}`}>
                  {eachRace.key}
                </Link>
              </Col>
              <Col md="5">{eachRace.guild.name}</Col>
              <Col md="1">{eachRace.entrants.length}</Col>
              <Col md="3">{winner ? winner.name : 'No winner'}</Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default RecentCompletedRaces;
