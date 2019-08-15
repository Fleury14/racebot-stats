import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import { ParseWagers } from '../../helpers';
import './Wagers.scss';

class Wagers extends Component {
  state = {
    selectedRace: null,
  }

  determineRowClass(entrant) {
    if (!entrant || !entrant.placement) {
      return 'wagers-row';
    }
    if (entrant.placement === 1) {
      return 'wagers-row wagers-first-place';
    }
    if (entrant.placement === 2) {
      return 'wagers-row wagers-second-place';
    }
    if (entrant.placement === 3) {
      return 'wagers-row wagers-third-place';
    }

    return 'wagers-row';
  }
  
  render() {
    // console.log('proppys', this.props);
    // console.log('stizzate', this.state);
    return (
      <div className="open-sans">
        <Navbar />
        <ReduxMainData>
          {(reduxData) => {
            let wageData = ParseWagers(reduxData.botData);
            wageData = wageData.sort((a, b) => {
              let aTime = new Date(a.start);
              let bTime = new Date(b.start);
              return bTime.getTime() - aTime.getTime();
            });
            const raceData = this.state.selectedRace ? wageData.find(race => race.key === this.state.selectedRace) : null;
            return (
              <div className="p-5">
                <h2>Select a race to see wager data</h2>
                {wageData.map(race => {
                  const startDate = race.start ? new Date(race.start).toLocaleDateString() : null;
                  return (
                    <span key={race.key} onClick={() => this.setState({ selectedRace: race.key })} className="mb-2 mr-2 badge badge-primary">{race.key} - {race.total}c - {startDate}</span>
                  )
                })}
                {raceData && (
                  <div>
                    <p className="wagers-total">Total cookies wagered: {raceData.total}</p>
                    <Container>
                      {raceData.entrants.map(entrant => {
                        return (
                          <Row key={entrant.name} className={this.determineRowClass(entrant)}>
                            <Col className="wagers-col" sm="4">{entrant.name}</Col>
                            <Col className="wagers-col" sm="4">Wagered {entrant.wager}</Col>
                            <Col className="wagers-col" sm="4">Won {entrant.winnings}</Col>
                          </Row>
                          
                        )
                      })}
                    </Container>
                    
                  </div>
                )}
              </div>
            );
          }}
        </ReduxMainData>
      </div>
    );
  }
  
}

export default Wagers;