import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PlayerTable.scss';

const renderPlayerRow = (player, index) => {
  if (index < 50) return (
    <tr key={player.id}>
      <th>
        <Link to={`/racer/${player.name}`}>{player.name}</Link>
      </th>
      <td>{player.cookies}</td>
      <td>{player.race_details.races_run}</td>
      <td>{player.race_details.seeds_rolled}</td>
      <td>{player.race_details.races_first}</td>
    </tr>
  );
}

const PlayerTable = (props) => {
  const { data } = props;
  if (data) { 
    return (
      <div className="player-table-container">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cookies</th>
              <th>Races Run</th>
              <th>Seeds Rolled</th>
              <th>Races Won</th>
            </tr>
          </thead>
          <tbody>
            {data.map((race, index) => renderPlayerRow(race, index))}
          </tbody>
        </Table>
      </div>
    );
  }
  return null;
}

export default PlayerTable;
