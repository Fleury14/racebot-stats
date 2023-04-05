import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import exceptions from '../../data/eel-exceptions';
import './eel.scss';

const EELResults = (props) => {
  
  const [page, setPage] = useState([0]);
  const { matches } = props;
  const upcomingMatches = matches.filter(match => !match.winner);
  const completedMatches = matches.filter(match => match.winner);

  const trimDiscord = (string) => {
    const exceptionCheck = exceptions.filter(e => e.discord === string);
    if (exceptionCheck.length > 0) return exceptionCheck[0].requested;
    return string.slice(0, -5);
  }

  if (!matches) return null;
  matches.sort((a, b) => {
    const aDate = Date.parse(a.Date);
    const bDate = Date.parse(b.Date);
    return bDate - aDate;
  });
  // console.log('matches', matches)

  return (
    <>
      <Row>
        <h3>Upcoming Matches</h3>
      </Row>
      <Row className="eel-results-legend">
        <Col md="2">Date</Col>
        <Col md="5">Player 1</Col>
        <Col md="5">Player 2</Col>
      </Row>
      {upcomingMatches.map((match) => {
        return (
          <Row key={`${match.p1Discord}vs${match.p2Discord}`} className={match.winner ? "eel-results-row eel-results-complete" : "eel-results-row"}>
            <Col md="2">{match.Date}</Col>
            <Col md="5" className={match.winner === "1" ? "eel-results-winner" : ""}>{trimDiscord(match.p1Discord)} - {match.p1Time}</Col>
            <Col md="5" className={match.winner === "2" ? "eel-results-winner" : ""}>{trimDiscord(match.p2Discord)} - {match.p2Time}</Col>
          </Row>
        );
      })}
      <Row>
        <h3 className="eel-results-subtitle">Completed Matches</h3>
      </Row>
      <Row className="eel-results-legend">
        <Col md="2">Date</Col>
        <Col md="5">Player 1</Col>
        <Col md="5">Player 2</Col>
      </Row>
      {completedMatches.map((match) => {
        return (
          <Row key={`${match.p1Discord}vs${match.p2Discord}`} className={match.winner ? "eel-results-row eel-results-complete" : "eel-results-row"}>
            <Col md="2">{match.Date}</Col>
            <Col md="5" className={match.winner === "1" ? "eel-results-winner" : ""}>{trimDiscord(match.p1Discord)} - {match.p1Time}</Col>
            <Col md="5" className={match.winner === "2" ? "eel-results-winner" : ""}>{trimDiscord(match.p2Discord)} - {match.p2Time}</Col>
          </Row>
        );
      })}
    </>
  );
}

export default EELResults;