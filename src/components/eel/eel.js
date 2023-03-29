import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Navbar} from '..';

class EEL extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="eel-title">Eblian Elixir League</h1>
        <Container>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
}

export default EEL;