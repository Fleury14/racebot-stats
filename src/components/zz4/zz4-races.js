import React, { Component }from 'react';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import parseTime from '../../helpers/parseTime';
import './zz4.scss';
import '../lhl/lhl.scss';

class ZZ4Races extends Component {
  state = {
    raceType: 'scheduled',
  }

  formatDate(string) {
    const matchDate = new Date(string.replace(' ', 'T'));
    // const rawDate = new Date(string.replace(' ', 'T')); // get raw date from db in eastern
    // const inputtedTime = rawDate.getTime(); // get time number
    // const utcDate = new Date(inputtedTime + (1000 * 60 * 60 * 4)); // add 4 hours to convert to UTC
    // const offset = new Date().getTimezoneOffset(); // get browsers offset from UTC (in minutes)
    // const matchDate = new Date(utcDate.getTime() - (offset * 1000 * 60)); // apply offset to UTC dat
    const newString = new Intl.DateTimeFormat('en-US', { weekday: 'long', month:'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(matchDate);
    return newString;

  }

  renderRaces(races) {
    const { raceType } = this.state;
    switch (raceType) {
      case 'scheduled':
        return races.filter(race => race.status === 'Scheduled');
      case 'completed':
        return races.filter(race => race.status === 'Completed');
      case 'unscheduled':
        return races.filter(race => race.status === 'Unscheduled');
      case 'hide-all':
        return [];
      default:
        return races;
    }
  }

  render() {
    const { races } = this.props;

    if (!races) return <h2>Races</h2>
    races.sort((a, b) => {
      const time1 = a.date ? new Date(a.date.replace(' ', 'T')).getTime() : 0;
      const time2 = b.date ? new Date(b.date.replace(' ', 'T')).getTime() : 0;
      return this.state.raceType !== 'completed' ? time1 - time2 : time2 - time1;
    })
    let display = this.renderRaces(races);

    return (
      <>
        <h2>Races</h2>
        <div className="d-flex flex-wrap">
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" id="radio-option-1" onClick={() => this.changeView('all')}></Input>
            <Label for="radio-option-1">All Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" id="radio-option-2" onClick={() => this.changeView('scheduled')} defaultChecked></Input>
            <Label for="radio-option-2">Upcoming Scheduled Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" id="radio-option-3" onClick={() => this.changeView('completed')}></Input>
            <Label for="radio-option-3">Completed Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" id="radio-option-4" onClick={() => this.changeView('unscheduled')}></Input>
            <Label for="radio-option-4">Unscheduled Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" id="radio-option-5" onClick={() => this.changeView('hide-all')}></Input>
            <Label for="radio-option-5">Hide all races (Bracket/Standings only)</Label>
          </FormGroup>
        </div>
        <Container fluid>
          {this.state.raceType !== 'hide-all' ? (
            <Row className="title-row">
              <Col md="10" lg="4">
                <p>Matchup</p>
              </Col>
              <Col md="2" lg="1">
                <p>Status</p>
              </Col>
              <Col md="6" lg="3">
                <p>Date</p>
              </Col>
              <Col md="6" lg="4">
                <p>{this.state.raceType === "completed" ? "Results" : "Restream Info"}</p>
              </Col>
            </Row>
          ) : null}
          
         
          {display.map((race, index) => {
            // console.log(race);
            return (
              
              <Row key={race.id} className={`race-row${index % 2 === 0 ? ' striped' : ''}`}>
                <Col md="10" lg="4">
                  {race.game ? (
                    <span>{race.racer1} vs. {race.racer2} - Game {race.game}</span>
                  ) : (
                    <span>{race.racer1} vs. {race.racer2}</span>
                  )}
                  
                </Col>
                <Col md="2" lg="1">
                  <span className={race.status === 'Scheduled' ? 'scheduled' : race.status === 'Completed' ? 'completed' : 'unscheduled'}>{race.status}</span>
                </Col>
                <Col md="6" lg="3" className="smaller-date-please d-flex align-items-flex-start">
                  {race.date && <span>{this.formatDate(race.date)}</span>}</Col> 
                <Col md="6" lg="4">
                  {race.status === 'Completed' && race.results ? (
                    <>
                      <span className={race.results && race.results.winner === 1 ? 'winner' : race.results.winner === 3 ? 'tied' : 'not-winner'}>{race.racer1} ({parseTime(race.results.racer1, !!race.game, race.results.winner === 1)})</span>
                      <span> - </span>
                      <span className={race.results && race.results.winner === 2 ? 'winner' : race.results.winner === 3 ? 'tied' : 'not-winner'}>{race.racer2} ({parseTime(race.results.racer2, !!race.game, race.results.winner === 2)})</span>
                    </>
                  ) : (
                    <div>
                      {race.restream.channel && <p><span className="restream-1">Channel:</span> {race.restream.channel}</p>}
                      {race.restream.commentary && race.restream.commentary.length && <p><span className="restream-2">Commentary:</span> {race.restream.commentary[0] + ' ' + race.restream.commentary[1]}</p>}
                      {race.restream.restreamer && <p><span className="restream-3">Restream:</span> {race.restream.restreamer}</p>}
                      {race.restream.tracker && <p><span className="restream-4">Tracker:</span> {race.restream.tracker}</p>}

                    </div>
                  )}
                  
                </Col>
              </Row>
              
            );
          })}
        </Container>
      </>
    
    )
  }

}