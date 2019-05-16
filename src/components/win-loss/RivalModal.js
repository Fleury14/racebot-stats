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
    <div className="rival-modal-bg open-sans">
      <div className="rival-modal-body">
        <h3 className="text-center text-uppercase">{playerName} vs. {rivalName}</h3>
        <Container fluid className="mb-4">
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
            const raceDate = new Date(race.details.created);
            return (
              <Row key={race.key} className={
                race.details.entrants.find(entrant => entrant.id === player).placement < race.details.entrants.find(entrant => entrant.id === rival).placement
                ? 'green-row'
                : 'red-row'
              }>
                <Col>
                  <p>{raceDate.toLocaleDateString()}</p>
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
        <div className="d-flex justify-content-center">
          <Button color="danger" onClick={() => close()}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export default RivalModal;