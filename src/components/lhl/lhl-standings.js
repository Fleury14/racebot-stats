import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './lhl.scss';

const LHLStandings = (props) => {
  const { entrants } = props;
  if (!entrants) return <h2>Standings</h2>
  const sortedEntrants = entrants.sort((a, b) => b.swisspoints - a.swisspoints);
  return (
    <>
      <h2>Standings</h2>
      <Container fluid>
      <Row className="title-row">
            <Col md="4">
              <p>Name</p>
            </Col>
            <Col md="2">
              <p>Points</p>
            </Col>
            <Col md="6">Race History</Col>
          </Row>
        {sortedEntrants.map(entrant => {
          return (
            (
              <Row className="race-row" key={entrant.displayname}>
                <Col md="4">
                  {entrant.displayname}
                </Col>
                <Col md="2">
                  {entrant.swisspoints}
                </Col>
                <Col md="4"></Col>
              </Row>
            )
          );
        })}
      </Container>
      
    </>
    
  )
}

export default LHLStandings;
