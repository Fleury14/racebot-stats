import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './RivalModal.scss';

const RivalModal = (props) => {
  const { close, player, rival, raceData } = props;
  if (!raceData) return null;
  const playerName = raceData[0].details.entrants.find(entrant => entrant.id === player).name;
  const rivalName = raceData[0].details.entrants.find(entrant => entrant.id === rival).name;
  console.log('props', props);
  return (
    <div className="rival-modal-bg">
      <div className="rival-modal-body">
        <h1 className="text-center">Rivalry Data</h1>
        <h3 className="text-center">{playerName} vs. {rivalName}</h3>
        <Container fluid>
          <Row>
            <Col>
              <h4>Date</h4>
            </Col>
            <Col>
              <h4>Race</h4>
            </Col>
            <Col>
              <h4>{playerName}</h4>
            </Col>
            <Col>
              <h4>{rivalName}</h4>
            </Col>
          </Row>
          {raceData.map(race => {
            return (
              <Row key={race.key}>
                <Col>
                  <p>{race.details.created}</p>
                </Col>
                <Col>
                  <p>{race.key}</p>
                </Col>
                <Col>
                  <p>{race.details.entrants.find(entrant => entrant.id === player).finish}</p>
                </Col>
                <Col>
                  <p>{race.details.entrants.find(entrant => entrant.id === rival).finish}</p>
                </Col>
              </Row>
            )
          })}
        </Container>
        <Button color="danger" onClick={() => close()}>Close</Button>
      </div>
    </div>
  );
}

export default RivalModal;