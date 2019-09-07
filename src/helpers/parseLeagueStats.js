import FormatTime from './FormatTime';
import { rate, Rating, rate_1vs1, expose } from 'ts-trueskill'
// should take in an array of races
const parseLeagueStats = (races) => {

  const bestWinningTime = {
    lastWeek: [],
    lastMonth: [],
    allTime: [],
  }

  const numOfRaces = [];

  // filter out league flags
  const filteredRaces = races.filter(race => {
    return race.details && race.details.metadata && race.details.metadata.Flags && race.details.metadata.Flags === 'V1 Jia Kqm Pk Cnx -hobs T3gr S2 B F Nck Gl Etf Xsbk -noadamants -aa -fab -huh -z';
  });

  filteredRaces.forEach(race => {
    // for now, skip over asyncs
    // if (race.details.async) return;
    if (race.details.metadata && race.details.metadata.Routers) {
      return;
    }
    const startTime = (new Date(race.details.startTime)).getTime();

    // we can use finishers for checking fastest winning times since forfeits dont matter
    race.details.finishers.sort((a, b) => a.placement - b.placement);
    if (!race.details.finishers.length) return;
    const winner = race.details.finishers[0];
    
    let winningTime = 0;

    // because asyncs dont have a start time we have to parse the finish time
    if (race.details.async) {
      const timeString = winner.finish;
      const colons = timeString.replace(/[^:]/g, "").length;
      if (colons === 1) {
        const winningSecs = parseInt(timeString.slice(-2, timeString.length));
        const winningMins = parseInt(timeString.slice(-5, -3));
        winningTime = ((winningMins * 60) + winningSecs) * 1000;
      } else {
        const winningSecs = parseInt(timeString.slice(-2, timeString.length));
        const winningMins = parseInt(timeString.slice(-5, -3));
        const winningHrs = parseInt(timeString.slice(-8, -6));   
        winningTime = ((winningHrs * 3600) + (winningMins * 60) + winningSecs) * 1000;
      }
    } else {
      winningTime = (new Date(winner.finishTime)).getTime() - startTime;
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
    for (let entrant of race.details.entrants) {
      const findRacer = numOfRaces.find(racer => racer.name === entrant.name);
      if (findRacer) {
        findRacer.count++;
      } else {
        numOfRaces.push({
          name: entrant.name,
          count: 1,
          rating: new Rating(40, 8.33333),
        });
      }
    }
    race.details.entrants.sort((a, b) => a.placement - b.placement);
    let entrantsArr = [];
    for (let entrant of race.details.entrants) {
      const objRef = numOfRaces.find(racer => racer.name === entrant.name);
      entrantsArr.push({ [objRef.name]: objRef.rating });
    }
    // const winnerObj = numOfRaces.find(racer => racer.name === race.details.entrants[0].name);
    // const runnerUpObj = numOfRaces.find(racer => racer.name === race.details.entrants[1].name);
    const ratingResult = rate(entrantsArr);
    for (let result of ratingResult) {
      for (let [key, val] of Object.entries(result)) {
        const objRef = numOfRaces.find(racer => racer.name === key);
        objRef.rating = val;
        // objRef['expose'] = expose(val);
      }
    }
    
    
    
  });
  
  // create points rating based off mean (mu)
  for (let racer of numOfRaces) {
    racer['score'] = Math.floor((racer.rating.mu - (0)) * 10);
  }
  numOfRaces.sort((a, b) => b.score - a.score);
  console.log('time things', bestWinningTime);
  console.log('num of races', numOfRaces);
  // console.log('races', filteredRaces);
  return {
    numOfRaces,
    bestWinningTime,
  };
}

export default parseLeagueStats;