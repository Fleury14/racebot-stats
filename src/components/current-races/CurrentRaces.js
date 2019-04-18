import React from 'react';

const CurrentRaces = (props) => {
  console.log('current races props', props);
  const { data } = props;
  return (
    <div>
      <h1>Current Races</h1>
      <p>Number of races running: { data.length }</p>
    </div>
  );
};

export default CurrentRaces;
