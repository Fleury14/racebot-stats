
// Should take in an array of races
const ParseWinLoss = (data) => {
  const racers = [];
  const forfeitString = 'Forfeited';
  const completedString = 'Completed';
  const twov2String = '2v2';
  const leagueFlags = 'V1 Jia Kqm Pk Cnx -hobs T3gr S2 B F Nck Gl Etf Xsbk -noadamants -aa -fab -huh -z';

  // loop through each race
  for (let race of data) {
    // skip over races that arent complete and 2v2s
    if (race.details.status !== completedString
      || race.details.mode === twov2String
      || race.details.type.indexOf('2v2') >= 0
      || race.details.type.indexOf('2v2beta') >= 0

      ) {
      continue;
    }
    // loop through entrants
    for (let entrant of race.details.entrants) {
      // does the user in the race exist in our array?
      if (!racers.find(race => race.id === entrant.id)) {
        racers.push({ id: entrant.id, name: entrant.name, opponents: [] })
      }

      // do a second loop through the race for opponents 
      for (let opponent of race.details.entrants) {
        // skip if players are the same or if they both forfeited
        if (opponent.id === entrant.id || (opponent.status === forfeitString && entrant.status === forfeitString)) {
          continue;
        }
        // set the current racer
        const currentRacer = racers.find(race => race.id === entrant.id);
        // since we know they're gonna get a result here, make sure opponent exists on the users object
        // if not then create
        if (!currentRacer.opponents.find(opponentRecord => opponentRecord.id === opponent.id)) {
          currentRacer.opponents.push({ id: opponent.id, name: opponent.name, wins: 0, losses: 0, leagueWins: 0, leagueLosses: 0 });
        }

        // set current opponent
        const currentOpponent = currentRacer.opponents.find(opponentRecord => opponentRecord.id === opponent.id);
                
        // if the opponent forfeited, give win by default
        if (opponent.status === forfeitString) {
          currentOpponent.wins++;
          if (race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === leagueFlags) {
            currentOpponent.leagueWins++;
          }
          continue;
        }

        // opposite if player forfeited
        if (entrant.status === forfeitString) {
          currentOpponent.losses++;
          if (race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === leagueFlags) {
            currentOpponent.leagueLosses++;
          }
          continue;
        }

        // compare placements. bothe players should have one since we eliminated forfeits
        if (entrant.placement < opponent.placement) {
          currentOpponent.wins++;
          if (race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === leagueFlags) {
            currentOpponent.leagueWins++;
          }
          continue;
        }

        if (entrant.placement > opponent.placement) {
          currentOpponent.losses++;
          if (race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === leagueFlags) {
            currentOpponent.leagueLosses++;
          }
          continue;
        }
        
        // at this point they would have the same placement. what a miracle!
        continue;
      }
    }
  }
  return racers;
};

export default ParseWinLoss;
