import React from 'react';
import { Link } from 'react-router-dom';
import './Twov2Stats.scss';

// expects data prop and current racer

const Twov2Stats = (props) => {
  const { data, currentRacer } = props;
  return (
    <div className="pairs-container">
      <h1 className="text-center text-uppercase">Partner Stats (2v2)</h1>
      <h4 className="text-center text-uppercase">(Races entered) Record</h4>
      {data.map((team, index) => {
        const partnerName = team.racer1Name === currentRacer ? team.racer2Name : team.racer1Name;
        return (
          <div key={index} className="d-flex">
            <div className="w-50 pr-3 text-right">
              <Link to={`/racer/${partnerName}`}>
                <h3>{partnerName}:</h3>
              </Link>
            </div>
            <div className="w-50 pr-3 text-left">
              <h4>({team.races_entered.length}) {team.wins} - {team.losses}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Twov2Stats;
