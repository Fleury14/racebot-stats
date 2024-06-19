import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';

const ZZ6Onramp = (props) => {
  const [onrampData, setOnrampData] = useState([]);

  const races = ["ff4fe-ohhrnb-async", "ff4fe-rofyut-async", "ff4fe-6lfdlj-async"]

  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRZzsiwlYgRA36o3IHeaLv2nMKDfWSAQoDMGGfgS2J7McEU2EfsGdjBoGEXLiemeFE_Z08zJxdZN5eX/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        console.log(' zz6 sheet results', results);
        setOnrampData(results.data);
      }
    })
  }, [])


  return (
    <div>
      <Container>
      <Row className="justify-content-center">
          <h2>ZZ6 On Ramp</h2>
        </Row>
        <Row className="justify-content-center">
          <h2>Races</h2>
        </Row>
        <Row>
          {races.map((race, index) => {
            return (
              <Col md="2">
                <Link key={race} to={`/race/${race}`}>Week {index + 1}</Link>
              </Col>            
          )
          })}
        </Row>
        <Row className="justify-content-center">
          <h2>Standings</h2>
        </Row>
        <Row className="onramp-row-header">
          <Col md="4">Rank</Col>
          <Col md="4">Racer</Col>
          <Col md="4">Total Points</Col>
        </Row>
        {onrampData.map((racer, index) => {
          return (
            <Row key={racer.racer} className={index % 2 === 0 ? 'onramp-row-striped' : 'onramp-row'}>
              <Col md="4">{racer.Rank}</Col>
              <Col md="4">{racer.Racer}</Col>
              <Col md="4">{racer.Total}</Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default ZZ6Onramp;
