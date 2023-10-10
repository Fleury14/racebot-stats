import React, { useEffect, useState } from 'react';
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import { parseOMG } from '../../helpers/parseOMG';

const OMG = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getOMGData() {
      const OMGdata = await parseOMG();
      setData(OMGdata);
    }
    getOMGData();
  }, [])

  // const OMGdata = parseOMG();
  console.log('omgdata', data)
  
  const overallView = (players) => {
    if (!players || !players.length) return null;
    return (
      <Container>
        <Row>
          <Col md="6">
            Name
          </Col>
          <Col md="3">Races Run</Col>
          <Col md="3">Points</Col>
        </Row>
        {players.map(player => {
          return (
            <Row key={player.name}>
              <Col md="6">{player.name}</Col>
              <Col md="3">{player.races}</Col>
              <Col md="3">{player.points}</Col>
            </Row>
          );
        })}
      </Container>
    )
  }

  return (
    <div>
      <Navbar />
      <h1>OMG</h1>
      <div>
        {overallView(data.players)}
      </div>
    </div>
  )

}

export default OMG;
