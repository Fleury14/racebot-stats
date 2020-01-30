import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Events.scss';

const SelectedEvent = (props) => {
  const { event } = props;
  event.entrants.sort((entrant1, entrant2) => entrant1.placement - entrant2.placement);
  return (
    <div className="event-body">
      <h2>{event.name}</h2>
      <Container>
        <Row>
          <Col sm="4">
            <h3 className="event-sub-head">{event.entrants.length} entrants</h3>
            {/* For now, look to see is the teams array is empty to warrant whether to draw teams or individuals */}
            {event.teams && event.teams.length ? (
              <React.Fragment>
                {event.teams.map(team => (
                  <div className="d-flex justify-content-between mb-0 event-entrant-row" key={team.name}>
                    <p>{team.name}</p>
                    <p>{team.points}</p>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {event.entrants.map(entrant => {
                  if (entrant.placement) return (
                    <div className="d-flex justify-content-between mb-0 event-entrant-row" key={entrant.id}>
                      <p><Link to={`/racer/${entrant.id}`}>{entrant.name}</Link></p>
                      <p>{iLoveJSRounding(entrant.points)}</p>
                    </div>
                  );
                  return null;
                }
              )}
              </React.Fragment>
            )}
            
          </Col>
          <Col sm="4">
            <h3>Admins</h3>
            {event.admins.map(admin => <p key={admin.id} className="event-admin">{admin.name}</p>)}
          </Col>
          <Col sm="4">
            <h3>Races</h3>
              {event.races.map(race => {
                return (
                  <div key={race.key}>
                    <Link to={`/race/${race.key}`}>{race.key}</Link>
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function iLoveJSRounding(num) {
  return Math.floor(num * 10) / 10;
}

export default SelectedEvent;
