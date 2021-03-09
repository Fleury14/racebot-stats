import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './lhl.scss';

function createChips(races, entrant) {
  let chips = [];
  if (!races || !entrant) return chips;
  const filteredRaces =  races.filter(race => race.status === 'Completed' && (race.racer1 === entrant || race.racer2 === entrant));
  filteredRaces.forEach(race => {
    if (race.results && race.results.winner) {
      if (race.racer1 === entrant) {
        chips.push({ result: race.results.winner === 1 ? 'W' : 'L', opponent: race.racer2  });
      } else {
        chips.push({ result: race.results.winner === 2 ? 'W' : 'L', opponent: race.racer1  });
      }
    } 
  });

  return chips;
}

const LHLStandings = (props) => {
  const { entrants, races } = props;
  if (!entrants) return <h2>Standings</h2>
  const sortedEntrants = entrants.sort((a, b) => b.swisspoints - a.swisspoints);
  return (
    <>
      <h2>Standings</h2>
      <Container fluid>
      <Row className="title-row">
            <Col md="4">
              <p>Name</p>
            </Col>
            <Col md="2">
              <p>Points</p>
            </Col>
            <Col md="6">Race History</Col>
          </Row>
        {sortedEntrants.map(entrant => {
          const chips = createChips(races, entrant.displayname);
          return (
            (
              <Row className="race-row" key={entrant.displayname}>
                <Col md="4">
                  {entrant.displayname}
                </Col>
                <Col md="2">
                  {entrant.swisspoints}
                </Col>
                <Col md="4">
                  {chips.map((chip, index) => {
                    let chipClass = '';
                    switch (chip.result) {
                      case 'W':
                        chipClass = 'chip-win';
                        break;
                      case 'L':
                        chipClass = 'chip-loss';
                        break;
                      default:
                    }
                    return <span key={index} className={chipClass}>{chip.opponent}</span>
                  })}
                </Col>
              </Row>
            )
          );
        })}
      </Container>
      
    </>
    
  )
}

export default LHLStandings;
