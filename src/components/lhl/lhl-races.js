import React, { Component }from 'react';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import parseTime from '../../helpers/parseTime';
import './lhl.scss';

class LHLRaces extends Component {
  state = {
    raceType: 'scheduled',
  }

  changeView(view) {
    this.setState({ raceType: view });
  }

  formatDate(string) {
    const matchDate = new Date(string)
    const newString = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(matchDate);
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
    const sortedByDate = races.sort((a, b) => {
      const time1 = new Date(a.date).getTime();
      const time2 = new Date(b.date).getTime();
      return time1 - time2;
    })
    let display = this.renderRaces(races);

    return (
      <>
        <h2>Races</h2>
        <div className="d-flex">
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('all')}></Input>
            <Label>All Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('scheduled')} defaultChecked></Input>
            <Label>Upcoming Scheduled Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('completed')}></Input>
            <Label>Completed Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('unscheduled')}></Input>
            <Label>Unscheduled Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('hide-all')}></Input>
            <Label>Hide all races</Label>
          </FormGroup>
        </div>
        <Container fluid>
          <Row className="title-row">
            <Col md="4">
              <p>Matchup</p>
            </Col>
            <Col md="1">
              <p>Status</p>
            </Col>
            <Col md="3">
              <p>Date</p>
            </Col>
            <Col md="4">
              <p>{this.state.raceType === "completed" ? "Results" : "Restream Info"}</p>
            </Col>
          </Row>
         
          {display.map((race, index) => {
            // console.log(race.results);
            return (
              <Row key={race.id} className={`race-row${index % 2 === 0 ? ' striped' : ''}`}>
                <Col md="4">
                  <span>{race.racer1} vs. {race.racer2}</span>
                </Col>
                <Col md="1">
                  <span className={race.status === 'Scheduled' ? 'scheduled' : race.status === 'Completed' ? 'completed' : 'unscheduled'}>{race.status}</span>
                </Col>
                <Col md="3" className="smaller-date-please d-flex align-items-center">
                  {race.date && <span>{this.formatDate(race.date)}</span>}</Col> 
                <Col md="4">
                  {race.status === 'Completed' && race.results ? (
                    <>
                      <span className={race.results && race.results.winner === 1 ? 'winner' : 'not-winner'}>{race.racer1} ({parseTime(race.results.racer1)})</span>
                      <span> - </span>
                      <span className={race.results && race.results.winner === 2 ? 'winner' : 'not-winner'}>{race.racer2} ({parseTime(race.results.racer2)})</span>
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

export default LHLRaces;