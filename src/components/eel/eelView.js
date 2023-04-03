import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Navbar} from '..';
import exceptions from '../../data/eel-exceptions';
import './eel.scss';

class EEL extends Component {

  trimDiscord(string) {
    const exceptionCheck = exceptions.filter(e => e.discord === string);
    if (exceptionCheck.length > 0) return exceptionCheck[0].requested;
    return string.slice(0, -5);
  }

  render() {
    const { teams, schedule } = this.props;
    // console.log('teams', teams, schedule);
    teams.sort((a, b) => {
      if (a.points !== b.points) return b.points - a.points;
      if (a.wins + a.losses + a.ties !== b.wins + b.losses + b.ties) return (a.wins + a.losses + a.ties) - (b.wins + b.losses + b.ties);
      return b.matchWins - a.matchWins 
    });
    return (
      <div className="eel-page">
        <Navbar />
        { !teams ? <h1>Loading...</h1> : (
          <>
          <div className="d-flex justify-content-center">
          <img src="images/EEL-splash.png" className="eel-splash" alt="Eblan Elixir League, an FF4FE Team Tournament running from April 4th to June 18th"/>
        </div>
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
          <Row>
            <div className="eel-subtitle">
              <h2>Team Detail</h2>
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
          <Row>
            <div className="eel-subtitle">
              <h2>Schedule</h2>
            </div>
            <h3 className="eel-schedule-week-subtitle">Week 1</h3>
          </Row>
          {schedule[1] && schedule[1].length ? (
            schedule[1].map((match, index) => {
              return (
                <Row key={`w1m${index + 1}`} className="eel-schedule-team-row">
                  <Col md="5">{match.team1}</Col>
                  <Col md="1">{match.team1Score !== undefined ? match.team1Score : ""}</Col>
                  <Col md="1">{match.team2Score !== undefined ? match.team2Score : ""}</Col>
                  <Col md="5" className="eel-schedule-right-team">{match.team2}</Col>
                </Row>
              )
            })
          ) : null}
          <Row>
            <h3 className="eel-schedule-week-subtitle">Week 2</h3>
          </Row>
          {schedule[2] && schedule[2].length ? (
            schedule[2].map((match, index) => {
              return (
                <Row key={`w2m${index + 1}`} className="eel-schedule-team-row">
                  <Col md="5">{match.team1}</Col>
                  <Col md="1">{match.team1Score !== undefined ? match.team1Score : ""}</Col>
                  <Col md="1">{match.team2Score !== undefined ? match.team2Score : ""}</Col>
                  <Col md="5" className="eel-schedule-right-team">{match.team2}</Col>
                </Row>
              )
            })
          ) : null}
          <Row>
            <h3 className="eel-schedule-week-subtitle">Week 3</h3>
          </Row>
          {schedule[3] && schedule[3].length ? (
            schedule[3].map((match, index) => {
              return (
                <Row key={`w3m${index + 1}`} className="eel-schedule-team-row">
                  <Col md="5">{match.team1}</Col>
                  <Col md="1">{match.team1Score !== undefined ? match.team1Score : ""}</Col>
                  <Col md="1">{match.team2Score !== undefined ? match.team2Score : ""}</Col>
                  <Col md="5" className="eel-schedule-right-team">{match.team2}</Col>
                </Row>
              )
            })
          ) : null}
        </Container>
          </>
        )}
        
      </div>
    )
  }
}

export default EEL;