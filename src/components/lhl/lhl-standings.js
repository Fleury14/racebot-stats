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
        chips.push({ result: race.results.winner === 1 ? 'W' : race.results.winner === 3 ? 'T' : 'L', opponent: race.racer2  });
      } else {
        chips.push({ result: race.results.winner === 2 ? 'W' : race.results.winner === 3 ? 'T' : 'L', opponent: race.racer1  });
      }
    } 
  });

  return chips;
}

const LHLStandings = (props) => {
  const { entrants, races } = props;
  if (!entrants) return <h2>Standings</h2>
  entrants.sort((a, b) => {  
    return b.swisspoints - a.swisspoints || a.losses - b.losses
  });
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
        {entrants.map(entrant => {
          const chips = createChips(races, entrant.displayname);
          // console.log('entrant', entrant);
          entrant.losses = 0;
          entrant.ties = 0;
          chips.forEach(chip => {
            if (chip.result === 'L') entrant.losses++;
            if (chip.result === 'T') entrant.ties++; 
          });
          const isEliminated = entrant.losses + (entrant.ties / 3) >= 3 && !entrant.hasDropped;
          const isAdvanced = entrant.swisspoints >= 10 && !entrant.hasDropped;
          return (
            (
              <Row className={`race-row${isEliminated ? ' eliminated' : ''}${isAdvanced ? ' advanced' : ''}${entrant.hasDropped ? ' has-dropped' : ''}`}key={entrant.displayname}>
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
                      case 'T':
                        chipClass = 'chip-tie';
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
        <div className="d-flex mt-4 align-items-center justify-content-between flex-wrap">
          <p className="has-dropped p-2">Has dropped from tournament</p>
          <p className="eliminated p-2">Has been eliminated from further advancement</p>
          <p className="advanced p-2">Has advanced to bracket stage</p>
        </div>
      </Container>
      
    </>
    
  )
}

export default LHLStandings;
