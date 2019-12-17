import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PlayerTable.scss';

const renderPlayerRow = (player, index) => {
  if (index < 50) return (
    <tr key={player.id}>
      <th>
        <Link to={`/racer/${player.id}`}>{player.name}</Link>
      </th>
      <td>{player.cookies}</td>
      <td>{player.race_details.races_run}</td>
      <td>{player.race_details.seeds_rolled}</td>
      <td>{player.race_details.races_first}</td>
    </tr>
  );
}

const PlayerTable = (props) => {
  const { data, cookieSort, racesRunSort, seedsSort, winsSort } = props;
  if (data) { 
    return (
      <div className="player-table-container">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <button onClick={() => cookieSort()}>Cookies</button>
              </th>
              <th>
                <button onClick={() => racesRunSort()}>Races Run</button>
              </th>
              <th>
                <button onClick={() => seedsSort()}>Seeds Rolled</button>
              </th>
              <th>
                <button onClick={() => winsSort()}>Races Won</button>
              </th>
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
