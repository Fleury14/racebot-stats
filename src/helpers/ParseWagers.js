const ParseWagers = (races) => {
  const racesWithWagers = [];
  races.items.forEach(race => {
    // if (race.key === 'ff4fe-qcnnd') {
    //   console.log('race', race);
    // }
    if (race.details && race.details.entrants) {
      race.details.entrants.forEach(entrant => {
        if (entrant.wager) {
          // console.log('wager?', race);
          if (racesWithWagers.indexOf(race.key) < 0) {
            racesWithWagers.push(race.key);
          }
        }
      })
    }
  });
  
  const wagerData = [];
  racesWithWagers.forEach(wagerRaceKey => {
    const currentRace = races.items.find(race => race.key === wagerRaceKey);
    if (!currentRace) {
      return;
    }
    const currentRaceData = {
      key: currentRace.key,
    };
    let wagerTotal = 0;
    const currentEntrants = [];
    // have to put two separate entrant loops,
    // one to cover total, other to obtain winnings
    currentRace.details.entrants.forEach(entrant => {
      wagerTotal += entrant.wager;
    });
    currentRace.details.entrants.forEach(entrant => {
      let winnings = 0;
      switch (entrant.placement) {
        case 1:
          winnings = Math.floor(wagerTotal * 0.6);
          break;
        case 2:
          winnings = Math.floor(wagerTotal * 0.25);
          break;
        case 3:
          winnings = Math.floor(wagerTotal * 0.15);
          break;
        default:
          winnings = 0;
          break;
      }
      const entrantData = {
        name: entrant.name,
        wager: entrant.wager,
        placement: entrant.placement,
        winnings,
      };
      currentEntrants.push(entrantData);
    });
    
    currentRaceData['total'] = wagerTotal;
    currentRaceData['entrants'] = currentEntrants;
    currentRaceData['start'] = currentRace.details.startTime;
    wagerData.push(currentRaceData);
  })
  
  return wagerData;
}

export default ParseWagers;