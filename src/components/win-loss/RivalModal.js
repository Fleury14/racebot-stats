import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RivalModal.scss';

class RivalModal extends Component {
  state = {
    paginate: this.props.raceData && this.props.raceData.length > 30,
    page: 1,
    pageLength: 30,
  };

  render() {
    const { close, player, rival, raceData } = this.props;
    const { paginate, page, pageLength } = this.state;
    if (!raceData) return null;
    raceData.sort((a, b) => {
      const aDate = new Date(a.created).getTime();
      const bDate = new Date(b.created).getTime();
      return bDate - aDate;
    });
    const displayedRaces = paginate ? raceData.slice((page - 1) * pageLength, page * pageLength) : raceData;
    const playerName = raceData[0].entrants.find(entrant => entrant.id === player).name;
    const rivalName = raceData[0].entrants.find(entrant => entrant.id === rival).name;

    // handle pagination
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(raceData.length / pageLength); i++) {
      pageNumbers.push(<span key={`page-${i+1}`} className={`page-number ${i + 1 === page ? 'page-active' : ''}`} onClick={() => this.setState({ page: i + 1 })}>{i + 1}</span>)
    }


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
            {displayedRaces.map(race => {
              const playerData = race.entrants.find(entrant => entrant.id === player);
              const rivalData = race.entrants.find(entrant => entrant.id === rival)
              const raceDate = new Date(race.created);
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
          {paginate ? <div className="paginator">
            <span>Page</span>
            {pageNumbers}
          </div> : null}
          <div className="d-flex justify-content-center">
            <Button color="danger" onClick={() => close()}>Close</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RivalModal;