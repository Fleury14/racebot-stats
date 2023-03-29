import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Navbar} from '..';
import { parseEEL } from '../../helpers';
import './eel.scss';

class EEL extends Component {
  render() {
    const { teams } = parseEEL();
    console.log('eel data', teams);
    return (
      <div className="eel-page">
        <Navbar />
        <h1 className="eel-title">Eblan Elixir League</h1>
        <Container>
          <Row>
            <div className="eel-subtitle">
              <h2>Standings</h2>
            </div>
          </Row>
          <Row className="eel-standings-legend">
            <Col md="1">
              <p>Rank</p>
            </Col>
            <Col md="5">
              <p>Name</p>
            </Col>
            <Col md="2">
              <p>Points</p>
            </Col>
            <Col md="2">
              <p>Record</p>
            </Col>
            <Col md="2">
              <p>Match Record</p>
            </Col>
          </Row>
          {teams.map((team, index) => {
            return (
              <Row key={`rank${index + 1}`} className={`eel-standings-row${index % 2 === 1 ? ` eel-striped` : ''}`}>
            <Col md="1">
              <p className="eel-standings-rank">{index + 1}</p>
            </Col>
            <Col md="5">
              <p>{team.name}</p>
            </Col>
            <Col md="2">
              <p>{team.points}</p>
            </Col>
            <Col md="2">
              <p>{team.wins}-{team.losses}{team.ties ? `-${team.ties}` : null}</p>
            </Col>
            <Col md="2">
              <p>{team.matchWins}-{team.matchLosses}{team.matchTies ? `-${team.matchTies}` : null}</p>
            </Col>
          </Row>
            );
          })}
        </Container>
      </div>
    )
  }
}

export default EEL;