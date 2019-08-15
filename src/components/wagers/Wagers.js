import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import { ParseWagers } from '../../helpers';

class Wagers extends Component {
  state = {
    selectedRace: null,
  }
  
  render() {
    // console.log('proppys', this.props);
    // console.log('stizzate', this.state);
    return (
      <div>
        <Navbar />
        <ReduxMainData>
          {(reduxData) => {
            const wageData = ParseWagers(reduxData.botData);
            console.log('wageData', wageData);
            const raceData = this.state.selectedRace ? wageData.find(race => race.key === this.state.selectedRace) : null;
            return (
              <React.Fragment>
              <h2>Select a race to see wager data</h2>
              {wageData.map(race => {
                return (
                  <span key={race.key} onClick={() => this.setState({ selectedRace: race.key })} className="mb-2 mr-2 badge badge-primary">{race.key}</span>
                )
              })}
              {raceData && (
                <div>
                  <p>Total cookies wagered: {raceData.total}</p>
                  <Container>
                    {raceData.entrants.map(entrant => {
                      return (
                        <Row key={entrant.name}>
                          <Col sm="4">{entrant.name}</Col>
                          <Col sm="4">Wagered {entrant.wager}</Col>
                          <Col sm="4">Won {entrant.winnings}</Col>
                        </Row>
                        
                      )
                    })}
                  </Container>
                  
                </div>
              )}
              </React.Fragment>
            );
          }}
        </ReduxMainData>
        <h1>Wagers</h1>
      </div>
    );
  }
  
}

export default Wagers;