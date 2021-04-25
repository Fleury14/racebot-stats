
// Should take in an array of races
const ParseWinLoss = (data) => {
  const racers = [];
  const forfeitString = 'Forfeited';
  const completedString = 'Completed';
  const twov2String = '2v2';
  const leagueFlags = 'O1:quest_forge/2:quest_tradepink/3:quest_magnes/random:2,boss,char/req:4/win:crystal Kmain/summon/moon Pkey Cstandard/distinct:10/j:abilities/nekkie/bye Twildish/maxtier:6 Sstandard/sell:quarter Bstandard/alt:gauntlet Nchars/key Etoggle Glife/sylph -kit:basic -kit2:dwarf -noadamants -spoon -exp:noboost -vanilla:giant';

  // loop through each race
  for (let race of data) {
    // skip over races that arent complete and 2v2s
    if (race.status !== completedString
      || race.mode === twov2String
      || race.type.indexOf('2v2') >= 0
      || race.type.indexOf('2v2beta') >= 0

      ) {
      continue;
    }
    // loop through entrants
    for (let entrant of race.entrants) {
      // does the user in the race exist in our array?
      if (!racers.find(race => race.id === entrant.id)) {
        racers.push({ id: entrant.id, name: entrant.name, opponents: [] })
      }

      // do a second loop through the race for opponents 
      for (let opponent of race.entrants) {
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
          if (race.metadata && race.metadata.Flags && race.metadata.Flags === leagueFlags) {
            currentOpponent.leagueWins++;
          }
          continue;
        }

        // opposite if player forfeited
        if (entrant.status === forfeitString) {
          currentOpponent.losses++;
          if (race.metadata && race.metadata.Flags && race.metadata.Flags === leagueFlags) {
            currentOpponent.leagueLosses++;
          }
          continue;
        }

        // compare placements. bothe players should have one since we eliminated forfeits
        if (entrant.placement < opponent.placement) {
          currentOpponent.wins++;
          if (race.metadata && race.metadata.Flags && race.metadata.Flags === leagueFlags) {
            currentOpponent.leagueWins++;
          }
          continue;
        }

        if (entrant.placement > opponent.placement) {
          currentOpponent.losses++;
          if (race.metadata && race.metadata.Flags && race.metadata.Flags === leagueFlags) {
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
