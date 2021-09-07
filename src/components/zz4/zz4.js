import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar } from '..';
import ZZ4Row from './zz4-row';
import { ReduxMainData, ReduxSirenZZ4Data } from '../redux-data';
import { parseZZ4 } from '../../helpers';
import ZZ4Races from './zz4-races';
import './zz4.scss'

class ZZ4 extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <ReduxMainData>
        {(reduxData) => {
          const zz4Data = parseZZ4(reduxData.botData);
          return (
            <>
            <ReduxSirenZZ4Data>
              {(sirenData) => {
                console.log('hello again siren', sirenData);
                return (
                  <div className="zz4-races">
                    {sirenData.zz4 ? <ZZ4Races races={sirenData.zz4} /> : null}
                  </div>
                );
              }}
            </ReduxSirenZZ4Data>
            <div className="zz4-main">
              
              <h2 className="zz4-title">Qualifying Races</h2>
                <Container>
                  <Row>
                    {zz4Data.qualifiers.map((race, index) => {
                      const startDate = new Date(race.startTime);
                      return (
                        
                          <Col className={`zz4-qualifier${index % 2 > 0 ? ' zz4-striped' : ''}`} key={race.key} lg="2" md="4" sm="6">
                            <Link to={`/race/${race.key}`}>
                            <p className="qualifier-name">{race.key}</p>
                            </Link>
                            <p className="qualifier-date">{startDate.toLocaleDateString()}</p>
                            <p className="qualifier-time">{startDate.toLocaleTimeString()}</p>
                          </Col>
                        
                      );
                    })}
                  </Row>
                </Container>
              <h2 className="text-center zz4-title">Official Standings</h2>
              <Container>
                <Row>
                  <Col>
                    <p>Rank</p>
                  </Col>
                  <Col>
                    <p>Name</p>
                  </Col>
                  <Col>
                    <p>Number of Races run</p>
                  </Col>
                  <Col>
                    Current Average Score
                  </Col>
                </Row>
                {zz4Data.racers.map((racer, index) => {
                  return (
                    <ZZ4Row key={racer.id} racer={racer} index={index} />
                  );
                })}
              </Container>
              <p>** Those who did not meet the minimum required number of races (4) did not have their scores and times count.</p>
            </div>
            </>
          );
        }}
      </ReduxMainData>
      
      </div>
    )
  }
}

export default ZZ4;