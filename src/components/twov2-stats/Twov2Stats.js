import React from 'react';
import './Twov2Stats.scss';

// expects data prop and current racer

const Twov2Stats = (props) => {
  console.log('props in 2v2', props);
  const { data, currentRacer } = props;
  return (
    <div className="pairs-container">
      <h1 className="text-center text-uppercase">Partner Stats (2v2)</h1>
      {data.map((team, index) => {
        return (
          <div key={index} className="d-flex">
            <div className="w-50 pr-3 text-right">
              <h3>{team.racer1Name === currentRacer ? team.racer2Name : team.racer1Name}:</h3>
            </div>
            <div className="w-50 pr-3 text-left">
              <h4>{team.wins} - {team.losses}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Twov2Stats;
