import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';
import './omg.scss';

const OMGBracketResults = () => {

  const [sheet, setSheet] = useState([]);

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRp13v8ajH5B-GhY5z1yQgAng9O0K500IEFeVXySGyetXnYET-Q1-oig0bkmWVLkYf7NGkezA-MXM_v/pub?gid=1715174496&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        if (!results.data) {
          console.log('no sheet data from source');
          return;
        }
        setSheet(results.data)
      },
    });
  }, [])
  
  return (
    <div>
      <Container>
        <Row className="omg-bracket-results-title">
          <Col md="1">
            <p>Round of</p>
          </Col>
          <Col md="1">
            <p>Game #</p>
          </Col>
          <Col md="10">
            <p>Result</p>
          </Col>
        </Row>
        {sheet.map(race => {
          return (
            <Row key={`${race.player1_name}${race.player2_name}${race.game}`}>
              <Col md="1">{race.round}</Col>
              <Col md="1">{race.game}</Col>
              <Col md="10">
                <span className={race.winner === "1" ? 'omg-bracket-winner' : ''}>{race.player1_name} {race.player1_time}</span>
                <span> - </span>
                <span className={race.winner === "2" ? 'omg-bracket-winner' : ''}>{race.player2_name} {race.player2_time}</span>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default OMGBracketResults;