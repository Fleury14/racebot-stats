import React from 'react';
import { Navbar } from '../../components';
import LHLRaces from './lhl-races';
import LHLStandings from './lhl-standings';
import { Container, Row, Col } from 'reactstrap';
import './lhl.scss';

const LHL = (props) => {
  return (
    <>
      <Navbar />
      <div className="open-sans lhl">
        <h1>Lali-ho League</h1>
        <Container>
          <Row>
            <Col md="6">
              <LHLRaces />
            </Col>
            <Col md="6">
              <LHLStandings />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default LHL;