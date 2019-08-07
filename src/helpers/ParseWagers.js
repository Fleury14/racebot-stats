const ParseWagers = (races) => {
  console.log('races', races);
  races.forEach(race => {
    if (race.key === 'ff4fe-qcnnd') {
      console.log('race', race);
    }
    // if (race.details && race.details.entrants) {
    //   race.details.entrants.forEach(entrant => {
    //     if (entrant.wager) {
    //       console.log('wager?', race);
    //     }
    //   })
    // }
  });
  return;
}

export default ParseWagers;