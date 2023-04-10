import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import exceptions from '../../data/eel-exceptions';
import './eel.scss';

const EELResults = (props) => {
  
  const [page, setPage] = useState(1);
  const { matches } = props;
  const upcomingMatches = matches.filter(match => !match.winner);
  const completedMatches = matches.filter(match => match.winner);

  const trimDiscord = (string) => {
    const exceptionCheck = exceptions.filter(e => e.discord === string);
    if (exceptionCheck.length > 0) return exceptionCheck[0].requested;
    return string.slice(0, -5);
  }

  const setWeek = (week) => {
    setPage(week);
  }

  const dateOutput = (dateStr) => {
    const date = new Date(dateStr);
    const TLD = date.toLocaleDateString();
    const TLT = date.toLocaleTimeString("en-US", { hour12: true, timeStyle: "short" });
    return `${TLD} ${TLT}`;
  }

  if (!matches) return null;
  upcomingMatches.sort((a, b) => {
    const aDate = Date.parse(a.Date);
    const bDate = Date.parse(b.Date);
    return aDate - bDate;
  });
  completedMatches.sort((a, b) => {
    const aDate = Date.parse(a.Date);
    const bDate = Date.parse(b.Date);
    return aDate - bDate;
  });
  // console.log('matches', matches)

  const WEEK_SELECTION = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Row>
        <h3>Upcoming Matches</h3>
      </Row>
      <Row className="eel-results-legend">
        <Col md="4">Date</Col>
        <Col md="4">Player 1</Col>
        <Col md="4">Player 2</Col>
      </Row>
      {upcomingMatches.map((match) => {
        return (
          <Row key={`${match.p1Discord}vs${match.p2Discord}`} className={match.winner ? "eel-results-row eel-results-complete" : "eel-results-row"}>
            <Col md="4">{dateOutput(match.Date)}</Col>
            <Col md="4" className={match.winner === "1" ? "eel-results-winner" : ""}>{trimDiscord(match.p1Discord)} - {match.p1Time}</Col>
            <Col md="4" className={match.winner === "2" ? "eel-results-winner" : ""}>{trimDiscord(match.p2Discord)} - {match.p2Time}</Col>
          </Row>
        );
      })}
      <Row>
        <h3 className="eel-results-subtitle">Completed Matches</h3>
      </Row>
      <Row>
        <div className="d-flex justify-content-between w-100">
          {WEEK_SELECTION.map(week => {
            return <div className={`eel-completed-week-button${week === page ? ' eel-active-week' : ''}`} key={`completedweek${week}`} onClick={() => setWeek(week)}><span>Week {week}</span></div>
          })}
        </div>
      </Row>
      <Row className="eel-results-legend">
        <Col md="4">Date</Col>
        <Col md="4">Player 1</Col>
        <Col md="4">Player 2</Col>
      </Row>
      {completedMatches.filter(match => match.week === page.toString()).map((match) => {
        return (
          <Row key={`${match.p1Discord}vs${match.p2Discord}`} className={match.winner ? "eel-results-row eel-results-complete" : "eel-results-row"}>
            <Col md="4">{dateOutput(match.Date)}</Col>
            <Col md="4" className={match.winner === "1" ? "eel-results-winner" : ""}>{trimDiscord(match.p1Discord)} - {match.p1Time}</Col>
            <Col md="4" className={match.winner === "2" ? "eel-results-winner" : ""}>{trimDiscord(match.p2Discord)} - {match.p2Time}</Col>
          </Row>
        );
      })}
    </>
  );
}

export default EELResults;