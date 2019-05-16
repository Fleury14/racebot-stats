import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './WinLossDisplay.scss';

const WinLossDisplay = (props) => {
  const { playerData, sendRivalInfo } = props;
  playerData.opponents.sort((a, b) => (b.wins + b.losses) - (a.wins + a.losses));
  return (
    <div className="win-loss-container">
      <Container fluid>
        <Row>
          {playerData.opponents.map(player => {
            return (
              <Col md="3" sm="6" key={player.id} className="win-loss-box" onClick={() => { sendRivalInfo(playerData.id, player.id)}}>
                <h4 className={`text-center text-uppercase ${player.name.length > 12 && 'big-name'}`}>{player.name}</h4>
                <h2 className="text-center">{player.wins}-{player.losses}</h2>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default WinLossDisplay;
