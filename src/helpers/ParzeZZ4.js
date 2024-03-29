import { qualifiers, drops } from "../data/zz4QualList";

// number of races an entrant must complete to have their time count
const REQUIRED_RACES = 4;

const parseZZ4 = (data) => {
  // console.log('races', data);
  if (!data || !data.items || !data.items.length) return { qualifiers: [], racers: [] };

  // filter out races that aren't in the qualifier array
  const qualifierRaces = data.items.filter(race => qualifiers.indexOf(race.key) >= 0);
  

  const zz4Entrants = [];


  // loop through each race entrants and...
  qualifierRaces.forEach(race => {
    race.entrants.forEach(entrant => {
      // make sure they didnt forfeit and they didnt drop
      if (entrant.status === 'Finished' && drops.indexOf(entrant.name.toLowerCase()) < 0) {
        // check if the racer is in the "zz4 entrants" array, 
        const foundRacer = zz4Entrants.find(tourneyRacer => tourneyRacer.id === entrant.id);
        if (foundRacer) {
          // if so, incrememnt race count
          foundRacer.races++;
        } else {
          // if not, add them with 1 race count
          zz4Entrants.push({
            id: entrant.id,
            name: entrant.name,
            races: 1,
            scores: [],
          });
        }
      }
    })
  });

  // now that we have each racers total races, we begin the results loop
  // go through each race
  qualifierRaces.forEach(race => {
    // filter out anyone who hasn't met the race requirement
    const filteredEntrants = race.entrants.filter(entrant => {
      const foundRacer = zz4Entrants.find(tourneyRacer => tourneyRacer.id === entrant.id);
      // this shouldnt ever happen but just in case
      if (!foundRacer) return false;
      // filter out those who have dropped
      if(drops.indexOf(entrant.name.toLowerCase()) >= 0) return false;
      return foundRacer.races >= REQUIRED_RACES;
    });

    // figure out the average from the top 6 remaining
    filteredEntrants.sort((a, b) => {
      const place1 = a.placement !== undefined && a.placement !== null ? a.placement : 999;
      const place2 = b.placement !== undefined && b.placement !== null ? b.placement : 999;
      return place1 - place2;
    });
    const top6 = filteredEntrants.filter((val, index) => index <= 5);
    // console.log('race', race);
    
    const startTime = new Date(race.startTime).getTime();
    const top6Times = [];
    top6.forEach(top => {
      const topTime = new Date(top.finishTime).getTime();
      top6Times.push(Math.floor((topTime / 1000) - (startTime / 1000)));
    });
    
    const top6Average = Math.floor(top6Times.reduce((a, b) => a + b, 0) / top6Times.length);
    
    // go through each entrant to calculate score
    filteredEntrants.forEach(filteredEntrant => {
      // make sure they didn't forfeit
      if (filteredEntrant.status !== 'Finished') return;
      const finishDate = new Date(filteredEntrant.finishTime).getTime();
      const finishTime = Math.floor((finishDate / 1000) - (startTime / 1000));
      // console.log('finish', finishTime);
      const score = 1 - ((finishTime - top6Average) / top6Average);
      
      // push that score to their scores array
      const targetRacer = zz4Entrants.find(zz4 => zz4.id === filteredEntrant.id);
      targetRacer.scores.push({
        race: race.key,
        score
      });
    });

    // go through racers
    zz4Entrants.forEach(zz4 => {
      // sort by score
      zz4.scores.sort((a, b) => b.score - a.score);
      // average their top 4
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        if(i < zz4.scores.length) sum += zz4.scores[i].score;
      }
      const avg = sum / Math.min(4, zz4.scores.length);
      // push that average to their object
      zz4['average'] = avg;
    })
    
  }) // end race loop
  
  // filter out uthose who didnt race enough
  const filteredzz4Entrants = zz4Entrants.filter(entrant => entrant.races >= REQUIRED_RACES)

  // sort entrants by average
  filteredzz4Entrants.sort((a, b) => b.average - a.average);
  
  // sort qualifier races by date
  qualifierRaces.sort((a, b) => {
    const aDate = new Date(a.startTime);
    const bDate = new Date(b.startTime);
    return aDate.getTime() - bDate.getTime();
  })
  
  return {
    qualifiers: qualifierRaces,
    racers: filteredzz4Entrants
  };
}

export default parseZZ4;