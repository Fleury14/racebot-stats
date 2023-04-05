import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import './eel.scss';

const EELResults = (props) => {
  
  const [page, setPage] = useState([0]);
  const { matches } = props;

  if (!matches) return null;
  matches.sort((a, b) => {
    const aDate = Date.parse(a.Date);
    const bDate = Date.parse(b.Date);
    return bDate - aDate;
  });
  // console.log('matches', matches)

  return (
    <>
      <Row className="eel-results-legend">
        <Col md="2">Date</Col>
        <Col md="5">Player 1</Col>
        <Col md="5">Player 2</Col>
      </Row>
      {matches.map((match) => {
        return (
          <Row key={`${match.p1Discord}vs${match.p2Discord}`} className={match.winner ? "eel-results-row eel-results-complete" : "eel-results-row"}>
            <Col md="2">{match.Date}</Col>
            <Col md="5" className={match.winner === "1" ? "eel-results-winner" : ""}>{match.p1Discord} - {match.p1Time}</Col>
            <Col md="5" className={match.winner === "2" ? "eel-results-winner" : ""}>{match.p2Discord} - {match.p2Time}</Col>
          </Row>
        );
      })}
    </>
  );
}

export default EELResults;