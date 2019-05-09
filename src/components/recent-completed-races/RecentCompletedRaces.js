import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './RecentCompletedRaces.scss';

const RecentCompletedRaces = (props) => {
  const { data } = props;
  console.log(data);
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
          const winner = eachRace.details.entrants.find(entrant => entrant.placement === 1);
          return (
            <Row key={eachRace.key} className="recently-completed-data-row">
              <Col md="3">{eachRace.key}</Col>
              <Col md="5">{eachRace.details.guild.name}</Col>
              <Col md="1">{eachRace.details.entrants.length}</Col>
              <Col md="3">{winner.name}</Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default RecentCompletedRaces;
