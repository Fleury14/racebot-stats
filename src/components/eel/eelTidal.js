import React from 'react';
import { Row, Col } from 'reactstrap';
import './eel.scss';

const parseTime = (timeStr) => {
  if (!timeStr) return 0;
  const timeVals = timeStr.split(':');
  return (+timeVals[0] * 3600) + (+timeVals[1] * 60) + +timeVals[2];
}

const EELTidal = (props) => {
  const { tidal } = props;
  tidal.sort((a, b) => {
    return parseTime(a.average) - parseTime(b.average);    
  }) 

  

  return (
    <div>
      <h2>Tidal Round Results</h2>
      <Row>
      <Col md="8" className="eel-tidal-top eel-tidal-title">Team Name</Col>
              <Col md="2" className="eel-tidal-top">Sum of Times</Col>
              <Col md="2" className="eel-tidal-top">Average Time</Col>
              <Col md="3">Runner 1</Col>
              <Col md="3">Runner 2</Col>
              <Col md="3">Runner 3</Col>
              <Col md="3">Runner 4</Col>
      </Row>
      {tidal.map(team => {
        if(team.runner1) return (
          <Row key={`tidal-${team.team}`} className="eel-tidal-team-container">
            
              <Col md="8" className="eel-tidal-top eel-tidal-title">{team.team}</Col>
              <Col md="2" className="eel-tidal-top">{team.sum}</Col>
              <Col md="2" className="eel-tidal-top">{team.average}</Col>
              <Col md="3">{team.runner1}{team.time1 ? `- ${team.time1}` : ''}</Col>
              <Col md="3">{team.runner2}{team.time2 ? `- ${team.time2}` : ''}</Col>
              <Col md="3">{team.runner3}{team.time3 ? `- ${team.time3}` : ''}</Col>
              <Col md="3">{team.runner4}{team.time1 ? `- ${team.time4}` : ''}</Col>
          </Row>
        )
      })}
    </div>
  )
}

export default EELTidal;
