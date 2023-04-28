import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import EELResults from './eelResults';
import './eel.scss';


const EELSchedule = (props) => {

  const NUM_OF_WEEKS = 8;
  const WEEK_BREAKPOINTS = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10] ];
  const { schedule } = props;
  const [view, setView] = useState(0);
  const weeksToDisplay = WEEK_BREAKPOINTS[view];

  return (
    <>
      <Row>
        <div className="eel-subtitle">
          <h2 id="schedule">Schedule</h2>
        </div>
      </Row>
      <Row>
        <div className="eel-schedule-button-row">
          <button className={`eel-completed-week-button${view === 0 ? 'eel-active-week' : ''}`} onClick={() => setView(0)}>Weeks 1-4</button>
          <button className={`eel-completed-week-button${view === 1 ? 'eel-active-week' : ''}`} onClick={() => setView(1)}>Weeks 5-8</button>
          <button className={`eel-completed-week-button${view === 2 ? 'eel-active-week' : ''}`} onClick={() => setView(2)}>Playoffs</button>
        </div>
      </Row>
      {weeksToDisplay.map(week => {
        return (
          <div key={`weekToDisplay${week}`}>
            <Row>
              <h3 className="eel-schedule-week-subtitle">Week {week}</h3>
            </Row>
            {schedule[week] && schedule[week].length ? (
              schedule[week].map((match, index) => {
                return (
                  <Row key={`w${week}m${index + 1}`} className="eel-schedule-team-row">
                    <Col md="5">{match.team1}</Col>
                    <Col md="1">{match.team1Score !== undefined ? match.team1Score : ""}</Col>
                    <Col md="1">{match.team2Score !== undefined ? match.team2Score : ""}</Col>
                    <Col md="5" className="eel-schedule-right-team">{match.team2}</Col>
                  </Row>
                )
              })
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export default EELSchedule;
