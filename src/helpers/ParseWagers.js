const ParseWagers = (races) => {
  const racesWithWagers = [];
  races.items.forEach(race => {
    if (race.details && race.details.entrants) {
      race.details.entrants.forEach(entrant => {
        if (entrant.wager) {
          if (racesWithWagers.indexOf(race.key) < 0) {
            racesWithWagers.push(race.key);
          }
        }
      })
    }
  });
  const allBetters = [];
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
      let currentBettor = allBetters.find(bettor => bettor.name === entrant.name);
      if (currentBettor) {
        currentBettor.wagerTotal += entrant.wager;
      } else {
        allBetters.push({
          name: entrant.name,
          winningsTotal: 0,
          wagerTotal: entrant.wager,
          id: entrant.id,
        });
        currentBettor = allBetters.find(bettor => bettor.name === entrant.name);
      }
      switch (entrant.placement) {
        case 1:
          winnings = Math.floor(wagerTotal * 0.6);
          currentBettor.winningsTotal += winnings;
          break;
        case 2:
          winnings = Math.floor(wagerTotal * 0.25);
          currentBettor.winningsTotal += winnings;
          break;
        case 3:
          winnings = Math.floor(wagerTotal * 0.15);
          currentBettor.winningsTotal += winnings;
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
  });
  allBetters.forEach(gambler => {
    gambler['delta'] = gambler.winningsTotal - gambler.wagerTotal;
  });
  return { wagerData, bettorTotals: allBetters };
}

export default ParseWagers;