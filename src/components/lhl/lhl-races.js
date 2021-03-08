import React, { Component }from 'react';
import { Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import './lhl.scss';

class LHLRaces extends Component {
  state = {
    raceType: 'all',
  }

  changeView(view) {
    this.setState({ raceType: view });
  }

  renderRaces(races) {
    const { raceType } = this.state;
    switch (raceType) {
      case 'scheduled':
        return races.filter(race => race.status === 'Scheduled');
      case 'completed':
        return races.filter(race => race.status === 'Completed')
      default:
        return races;
    }
  }

  render() {
    const { races } = this.props;

    if (!races) return <h2>Races</h2>
    let display = this.renderRaces(races);
    return (
      <>
        <h2>Races</h2>
        <div className="d-flex">
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('all')} defaultChecked></Input>
            <Label>All Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('scheduled')}></Input>
            <Label>Upcoming Scheduled Races</Label>
          </FormGroup>
          <FormGroup check className="mr-5">
            <Input type="radio" name="radio1" onClick={() => this.changeView('completed')}></Input>
            <Label>Completed Races</Label>
          </FormGroup>
        </div>
        <Container fluid>
          <Row className="title-row">
            <Col md="4">
              <p>Matchup</p>
            </Col>
            <Col md="2">
              <p>Status</p>
            </Col>
            <Col md="6">
              <p>Restream Info</p>
            </Col>
          </Row>
         
          {display.map((race, index) => {
            return (
              <Row key={race.id} className={`race-row${index % 2 === 0 ? ' striped' : ''}`}>
                <Col md="4">
                  <span>{race.racer1} vs. {race.racer2}</span>
                </Col>
                <Col md="2">
                  <span className={race.status === 'Scheduled' ? 'scheduled' : race.status === 'Completed' ? 'completed' : 'unscheduled'}>{race.status}</span>
                </Col> 
                <Col md="6">
                  <div>
                    {race.restream.channel && <p><span className="restream-1">Channel:</span> {race.restream.channel}</p>}
                    {race.restream.commentary && race.restream.commentary.length && <p><span className="restream-2">Commentary:</span> {race.restream.commentary[0] + ' ' + race.restream.commentary[1]}</p>}
                    {race.restream.restreamer && <p><span className="restream-3">Restream:</span> {race.restream.restreamer}</p>}
                    {race.restream.tracker && <p><span className="restream-4">Tracker:</span> {race.restream.tracker}</p>}

                  </div>
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