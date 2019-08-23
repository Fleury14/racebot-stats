import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
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

  // order expects 'a' or 'd'
  sortByDelta(bettors, order) {
    console.log('revd', bettors);
    if (!bettors) {
      return [];;
    }
    return order === 'd' ? bettors.sort((a, b) => b.delta - a.delta) : bettors.sort((a, b) => a.delta - b.delta);
  }
  
  render() {
    return (
      <div className="open-sans">
        <Navbar />
        <ReduxMainData>
          {(reduxData) => {
            const parsedData = ParseWagers(reduxData.botData)
            let wageData = parsedData.wagerData;
            wageData = wageData.sort((a, b) => {
              let aTime = new Date(a.start);
              let bTime = new Date(b.start);
              return bTime.getTime() - aTime.getTime();
            });
            let topGamblers = parsedData.bettorTotals.sort((a, b) => b.wagerTotal - a.wagerTotal).slice(0, 10);
            let topWinners = parsedData.bettorTotals.sort((a, b) => b.winningsTotal - a.winningsTotal).slice(0, 10);
            const raceData = this.state.selectedRace ? wageData.find(race => race.key === this.state.selectedRace) : null;
            return (
              <div className="p-5">                
                <Container>
                  <Row>
                    <Col md="6" className="d-flex flex-column align-items-center">
                      <h2 className="text-center mb-4">Most Cookies Wagered</h2>
                      {topGamblers.map(gambler => (
                        <div className="d-flex justify-content-between w-100" key={gambler.name}>
                          <Link to={`/racer/${gambler.name}`}>
                            <p className="text-left">{gambler.name}</p>
                          </Link>
                          <p className="text-right">{gambler.wagerTotal}</p>
                        </div>
                      ))}
                    </Col>
                    <Col md="6">
                    <h2 className="text-center mb-4">Most Cookies Won</h2>
                      {topWinners.map(gambler => (
                        <div className="d-flex justify-content-between w-100" key={gambler.name}>
                          <Link to={`/racer/${gambler.name}`}>
                            <p className="text-left">{gambler.name}</p>
                          </Link>
                          <p className="text-right">{gambler.winningsTotal}</p>
                        </div>
                      ))}
                    </Col>
                  </Row>
                  <Row className="mt-5 mb-5">
                    <Col sm="12">
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
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <h2 className="text-center">Current Delta</h2>
                      <p className="text-center">Winnings - Total wagered</p>
                    </Col>
                  </Row>
                  <Row>           
                    <Col sm="4" className="wagers-delta-container">
                      <h3 className="text-center">Net Gain</h3>
                      {this.sortByDelta(parsedData.bettorTotals, 'd').map(gambler => {
                        if (gambler.delta > 0) {
                          return (
                            <div key={gambler.name} className="d-flex justify-content-between wagers-delta-cell wagers-gain">
                              <p>{gambler.name}</p>
                              <p>{gambler.delta}</p>
                            </div>
                          )
                        }
                      })}
                    </Col>
                    <Col sm="4" className="wagers-delta-container">
                      <h3 className="text-center">Even</h3>
                      {this.sortByDelta(parsedData.bettorTotals).map(gambler => {
                        if (gambler.delta === 0) {
                          return (
                            <div key={gambler.name} className="d-flex justify-content-between wagers-delta-cell wagers-even">
                              <p>{gambler.name}</p>
                              <p>EVEN</p>
                            </div>
                          )
                        }
                      })}
                    </Col>
                    <Col sm="4" className="wagers-delta-container">
                      <h3 className="text-center">Net Loss</h3>
                      {this.sortByDelta(parsedData.bettorTotals, 'a').map(gambler => {
                        if (gambler.delta < 0) {
                          return (
                            <div key={gambler.name} className="d-flex justify-content-between wagers-delta-cell wagers-loss">
                              <p>{gambler.name}</p>
                              <p>{gambler.delta}</p>
                            </div>
                          )  
                        }
                      })}
                    </Col>
                  </Row>
                </Container>
                
              </div>
            );
          }}
        </ReduxMainData>
      </div>
    );
  }
  
}

export default Wagers;