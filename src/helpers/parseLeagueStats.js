import FormatTime from './FormatTime';
// should take in an array of races
const parseLeagueStats = (races) => {

  const bestWinningTime = {
    lastWeek: [],
    lastMonth: [],
    allTime: [],
  }

  // filter out league flags
  const filteredRaces = races.filter(race => {
    return race.details && race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === 'V1 Jia Kqm Pk Cnx -hobs T3gr S2 B F Nck Gl Etf Xsbk -noadamants -aa -fab -huh -z';
  });

  filteredRaces.forEach(race => {
    // for now, skip over asyncs
    if (race.details.async) return;
    const startTime = (new Date(race.details.startTime)).getTime();

    // we can use finishers for checking fastest winning times since forfeits dont matter
    race.details.finishers.sort((a, b) => a.placement - b.placement);
    if (!race.details.finishers.length) return;
    const winner = race.details.finishers[0];
    // console.log('winner', winner);
    const winningTime = (new Date(winner.finishTime)).getTime() - startTime;
    if (isNaN(winningTime)) {
      console.log('NaNi?', winner, startTime, race);
    }
    if (bestWinningTime.allTime.length < 10) {
      bestWinningTime.allTime.push({
        name: winner.name,
        time: winningTime,
        prettyTime: FormatTime(winningTime),
      });
      bestWinningTime.allTime.sort((a, b) => a.time - b.time);
    } else if (winningTime < bestWinningTime.allTime[9].time) {
      bestWinningTime.allTime.pop();
      bestWinningTime.allTime.push({
        name: winner.name,
        time: winningTime,
        prettyTime: FormatTime(winningTime),
      });
      bestWinningTime.allTime.sort((a, b) => a.time - b.time);
    }
  });
  console.log('time things', bestWinningTime);
  console.log('races', filteredRaces);
}

export default parseLeagueStats;