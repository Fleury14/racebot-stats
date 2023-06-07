import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Navbar} from '..';
import exceptions from '../../data/eel-exceptions';
import EELResults from './eelResults';
import EELSchedule from './eelSchedule';
import EELTidal from './eelTidal';
import './eel.scss';

class EEL extends Component {

  trimDiscord(string) {
    const exceptionCheck = exceptions.filter(e => e.discord === string);
    if (exceptionCheck.length > 0) return exceptionCheck[0].requested;
    return string.slice(0, -5);
  }

  render() {
    const { teams, schedule, matches, tidal } = this.props;
    // console.log('teams', teams, schedule);
    teams.sort((a, b) => {
      if (a.points !== b.points) return b.points - a.points;
      if (a.wins + a.losses + a.ties !== b.wins + b.losses + b.ties) return (a.wins + a.losses + a.ties) - (b.wins + b.losses + b.ties);
      if (a.matchWins !== b.matchWins) return b.matchWins - a.matchWins;
      return a.matchLosses - b.matchLosses;
      
    });
    return (
      <div className="eel-page">
        <Navbar />
        { !teams ? <h1>Loading...</h1> : (
          <Container>
          <>
          <Row className="eel-subnav-row">
            <Col md="2">
              <a href="#standings"><p>Standings</p></a>
            </Col>
            <Col md="2">
              <a href="#teamDetail"><p>Team Detail</p></a>
            </Col>
            <Col md="2">
              <a href="#schedule"><p>Schedule</p></a>
            </Col>         
            <Col md="2">
              <a href="#matchResults"><p>Match Results</p></a>
            </Col>
          </Row>
            <div className="d-flex justify-content-center">
              <img src="images/EEL-splash.png" className="eel-splash" alt="Eblan Elixir League, an FF4FE Team Tournament running from April 4th to June 18th"/>
            </div>
          
          <Row>
            <div className="eel-subtitle">
              <h2 id="standings">Standings</h2>
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
          <Row>
            <div className="eel-subtitle">
              <h2 id="teamDetail">Team Detail</h2>
            </div>
          </Row>
          <Row>
          {teams.map((team, index) => {
            return (
              <Col md="4" key={`team${team.name}`}>
                <div className={`eel-detail-cell${index % 2 === 1 ? ' eel-striped' : ''}`}>
                  <p className="eel-detail-team-name">{team.name}</p>
                  {team.members.map(member => {
                    return (
                      <div className="eel-detail-player-row" key={`${member.name}`}>
                        <p>{this.trimDiscord(member.name)}</p>
                        {/* <p>GP: {member.wins + member.losses + member.ties}</p> */}
                        <p>Record: {member.wins} - {member.losses}{member.ties ? `-${member.ties}` : null}</p>
                      </div>
                    );
                  })}
                </div>
              </Col>
            )
          })}
          </Row>
          <EELSchedule
            schedule={schedule}
          />
          <Row>
            <div className="eel-subtitle">
              <h2 id="matchResults">Match Results <span className="eel-mid-header-span">(all times eastern)</span></h2>
            </div>
          </Row>
          <EELResults matches={matches} />
          <EELTidal tidal={tidal} />
          </>
          </Container>
        )}
        
      </div>
    )
  }
}

export default EEL;