import React, { useEffect, useState } from 'react';
import { Navbar } from '..';
import { Container, Row, Col } from 'reactstrap';
import { parseOMG } from '../../helpers/parseOMG';
import OMGAsyncView from './omgAsyncsView';
import { OMGasyncs } from '../../data/omg-asyncs';
import './omg.scss';

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
        <Row className="omg-title-row omg-row">
          <Col md="1">Rank</Col>
          <Col md="5">
            Name
          </Col>
          <Col md="3">Races Run</Col>
          <Col md="2">Top 3 Points</Col>
          <Col md="1">Points</Col>
        </Row>
        {players.map((player, index) => {
          return (
            <Row key={player.name} className={`${player.asyncwins.length > 0 ? 'omg-winner' : ''} omg-row ${index === 31 ? 'omg-cutoff' : ''}`}>
              <Col md="1" className="omg-rank">{index + 1}</Col>
              <Col md="5">{player.name}</Col>
              <Col md="3">{player.races}</Col>
              <Col md="2">{player.top3.map(pts => <span key={pts}>{pts} </span>)}</Col>
              <Col md="1">{player.points}</Col>
            </Row>
          );
        })}
      </Container>
    )
  }

  return (
    <div className="omg">
      <Navbar />
      <div className="d-flex justify-content-center">
        <img src="images/omg-banner.jpg" alt="Omnidexterous Memers guild, the FF4FE fall event" className="omg-banner" />
      </div>
      <h2 className="omg-title">Overall Standings</h2>
      <div>
        {overallView(data.players)}
      </div>
      <div className="omg-divider"></div>
      <div>
        <h2 className="omg-title">Individual Races</h2>
        {data.races && <OMGAsyncView races={OMGasyncs} data={data.races} />}
      </div>
    </div>
  )

}

export default OMG;
