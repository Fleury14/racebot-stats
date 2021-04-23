import React from 'react';
import { Navbar } from '../../components';
import LHLRaces from './lhl-races';
import LHLStandings from './lhl-standings';
import { ReduxSirenData } from '../redux-data';
import { Container, Row, Col } from 'reactstrap';
import './lhl.scss';

const LHL = (props) => {
  return (
    <ReduxSirenData>
      {(sirenData) => {
        // console.log('siren data in lhl', sirenData);
        return (
          <>
            <Navbar />
            <div className="open-sans lhl">
              <h1>Lali-ho League</h1>
              <Container fluid>
                <Row>
                  <Col md="12">
                    <LHLRaces races={sirenData.races} entrants={sirenData.entrants} />
                  </Col>
                  <Col md="12">
                    <iframe title="LHL Bracket" src="https://challonge.com/i8ddvaqr/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                  </Col>
                  <Col md="12">
                    <LHLStandings races={sirenData.races} entrants={sirenData.entrants} />
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        );
      }}
      
    </ReduxSirenData>
  )
}

export default LHL;