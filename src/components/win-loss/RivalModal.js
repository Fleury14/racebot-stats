import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RivalModal.scss';

class RivalModal extends Component {
  render() {
    const { close, player, rival, raceData } = this.props;
    if (!raceData) return null;
    raceData.sort((a, b) => {
      const aDate = new Date(a.details.created).getTime();
      const bDate = new Date(b.details.created).getTime();
      return bDate - aDate;
    })
    const playerName = raceData[0].details.entrants.find(entrant => entrant.id === player).name;
    const rivalName = raceData[0].details.entrants.find(entrant => entrant.id === rival).name;
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
              const playerData = race.details.entrants.find(entrant => entrant.id === player);
              const rivalData = race.details.entrants.find(entrant => entrant.id === rival)
              const raceDate = new Date(race.details.created);
              return (
                <Row key={race.key} className={
                  playerData.placement < rivalData.placement || (playerData.status !== 'Forfeited' && rivalData.status === 'Forfeited')
                  ? 'green-row'
                  : (playerData.placement > rivalData.placement || (playerData.status === 'Forfeited' && rivalData.status !== 'Forfeited')) ? 'red-row' : ''
                }>
                  <Col>
                    <p>{raceDate.toLocaleDateString()}</p>
                  </Col>
                  <Col>
                    <Link to={`/race/${race.key}`}>
                      <p>{race.key}</p>
                    </Link>
                  </Col>
                  <Col>
                    <p>{playerData.finish || 'Not Submitted'}</p>
                  </Col>
                  <Col>
                    <p>{rivalData.finish || 'Not Submitted'}</p>
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
}

export default RivalModal;