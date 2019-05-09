const FakeLadder = (allRaces) => {
  const RACE_DECAY_TRIGGER = 10; // how many race is a ladder entrant absent for to require a bump down
  const ladder = [];
  // sort by time starting with first
  allRaces.sort((a, b) => {
    const timeA = new Date(a.details.created);
    const timeB = new Date(b.details.created);
    return timeA.getTime() - timeB.getTime();
  });
  const filteredRaces = allRaces.filter(race => race.details && race.details.game === 'ff4fe' && race.details.mode !== '2v2');
  console.log('data', filteredRaces);

  for (let eachRace of filteredRaces ) {
    // loop through each entrant once to make sure everyone exists
    for (let eachEntrant of eachRace.details.entrants) {
      const findRacer = ladder.find(ladderEntrant => ladderEntrant.id === eachEntrant.id);
      if (!findRacer) {
        ladder.push({
          name: eachEntrant.name,
          id: eachEntrant.id,
          rank: ladder.length + 1,
          wins: 0,
          losses: 0,
          raceDecay: 0,
        });
      }
    }

    // now loop through to parse results
    for (let eachEntrant of eachRace.details.entrants) {
      // and again for opposition
      for (let eachOpponent of eachRace.details.entrants) {
        if (eachEntrant.id === eachOpponent) {
          continue;
        }
        // grab ladder entries
        const entrantLadder = ladder.find(ladderEntrant => ladderEntrant.id === eachEntrant.id);
        const opponentLadder = ladder.find(ladderEntrant => ladderEntrant.id === eachOpponent.id);
        // adjust win/loss
        if (eachEntrant.placement < eachOpponent.placement) {
          entrantLadder.wins++;
          // if ladder rank is higher, move up a spot
          if (entrantLadder.rank > opponentLadder.rank && entrantLadder.rank !== 1) {
            const pushDown = ladder.find(ladderEntrant => ladderEntrant.rank === entrantLadder.rank - 1);
            // if (filteredRaces.indexOf(eachRace) === 1) console.log(entrantLadder, pushDown);
            pushDown.rank++;
            entrantLadder.rank--;
            // if (filteredRaces.indexOf(eachRace) === 1) console.log(pushDown.rank, entrantLadder.rank);
          }
        } else if (eachEntrant.placement > eachOpponent.placement) {
          entrantLadder.losses++;
        }

      }
    }

    // add race decay for non participants, reset it for those who did.
    for (let ladderEntrant of ladder) {
      const findEntrant = eachRace.details.entrants.find(entrant => entrant.id === ladderEntrant.id);
      findEntrant ? ladderEntrant.raceDecay = 0 : ladderEntrant.raceDecay++;
      if (ladderEntrant.raceDecay >= RACE_DECAY_TRIGGER + 1 && ladderEntrant.rank !== ladder.length) {
        const pushDown = ladder.find(ladderSearch => ladderSearch.rank === ladderEntrant.rank + 1);
        ladderEntrant.rank++;
        pushDown.rank--;
        ladderEntrant.raceDecay = 0;
      }
    }
  }
  ladder.sort((a, b) => a.rank - b.rank);
  console.log('ladder', ladder);
}

export default FakeLadder;
