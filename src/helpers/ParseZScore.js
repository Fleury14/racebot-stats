import React from 'react';

// expects one race object
const ParseZScore = (race) => {
  if (!race || !race.details || !race.details.entrants) {
    return null;
  }
  const finishTimesInSecs = [];

  for (let entrant of race.details.entrants) {
    const startTime = new Date(race.details.created);
    const finishTime = new Date() 
  }

  console.log('received race!', race);
}

export default ParseZScore;
