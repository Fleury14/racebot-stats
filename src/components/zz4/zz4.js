import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Navbar } from '..';
import { ReduxMainData } from '../redux-data';
import { parseZZ4 } from '../../helpers';
import './zz4.scss'

class ZZ4 extends Component {
  render() {
    return (
      <div className="zz4-main">
      <Navbar />
      <ReduxMainData>
        {(reduxData) => {
          const zz4Data = parseZZ4(reduxData.botData);
          console.log('zz4', zz4Data)
          console.log('loading?', reduxData.loading)
          return (
            <>
              <h2 className="text-center zz4-title">Unofficial Standings</h2>
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
                {zz4Data.map((racer, index) => {
                  return (
                    <Row key={racer.id} className="zz4-row">
                      <Col>
                        <p className="zz4-rank">{index + 1}</p>
                      </Col>
                      <Col>
                        {racer.name}
                      </Col>
                      <Col>
                        {racer.races}
                      </Col>
                      <Col>
                        {racer.average}
                      </Col>
                    </Row>
                  );
                })}
              </Container>
            </>
          );
        }}
      </ReduxMainData>
      
      </div>
    )
  }
}

export default ZZ4;