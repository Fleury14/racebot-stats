import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RaceTable.scss';

const renderRaceRow = (race, index) => {
  const startDate = new Date(race.created);
  if (index < 50) return (
    <tr key={race.key}>
      <th>
        <Link to={`/race/${race.key}`}>{race.key}</Link>
      </th>
      <td>{race.guild.name}</td>
      <td>{race.async ? 'Yes' : 'No'}</td>
      <td>{race.entrants.length}</td>
      <td>{startDate.toLocaleString()}</td>
      <td>{race.mode}</td>
    </tr>
  );
}

const CurrentRaces = (props) => {
  const { data } = props;
  return (
    <div className="current-races-container open-sans">
      {/* <p>Number of races running: { data.length }</p> */}
      <Table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Location</th>
            <th>Async?</th>
            <th>Entrants</th>
            <th>Time Started</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((race, index) => renderRaceRow(race, index))}
        </tbody>
      </Table>
    </div>
  );
};

export default CurrentRaces;
