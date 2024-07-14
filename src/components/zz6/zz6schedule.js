import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Container, Row, Col } from 'reactstrap';
import './zz6schedule.scss';

const ZZ6Schedule = (props) => {

const [schedule, setSchedule] = useState([]);

useEffect(() => {
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vR6D7k4gzr5FqReqEDRpE-P_2CQvBfeK9RQjmxaEcWs58jFT4UuT2_1j_Ga3wiMjd_t35G42DEaCDlm/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      console.log(' zz6 schedule results', results);
      setSchedule(results.data);
    }
  })
}, [])

function renderScheduledMatches() {
  const scheduledMatches = schedule.filter(match => match.Winner === "");
  return (
    <Container>
      <Row className="schedule-title-row">
        <Col md="4">Date</Col>
        <Col md="4">Match</Col>
        <Col md="4">Restream info</Col>
      </Row>
      {scheduledMatches.map((match, index) => {
        return (
          <Row key={`${index}${match["Player 1"]}${match["Player 2"]}`}>
            <Col md="4">{match.Date}</Col>
            <Col md="4">{match["Player 1"]} vs. {match["Player 2"]}</Col>
            <Col md="4">{match.Channel}</Col>
          </Row>
        );
      })}
    </Container>
  );
}

return (
  <div>
    <h2>Schedule</h2>
    <h3>Upcoming Matches</h3>
    {renderScheduledMatches()}
  </div>
);

}

export default ZZ6Schedule;