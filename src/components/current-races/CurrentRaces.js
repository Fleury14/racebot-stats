import React from 'react';
import { Table } from 'reactstrap';
import './CurrentRaces.scss';

const renderRaceRow = (race) => {
  const startDate = new Date(race.details.created);
  return (
    <tr key={race.key}>
      <th>{race.key}</th>
      <td>{race.details.guild.name}</td>
      <td>{race.details.async ? 'Yes' : 'No'}</td>
      <td>{race.details.entrants.length}</td>
      <td>{startDate.toLocaleString()}</td>
      <td>{race.details.mode}</td>
    </tr>
  );
}

const CurrentRaces = (props) => {
  const { data } = props;
  return (
    <div className="current-races-container open-sans">
      <h1 className="text-center text-uppercase">Current Races</h1>
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
          {data.map(race => renderRaceRow(race))}
        </tbody>
      </Table>
    </div>
  );
};

export default CurrentRaces;
