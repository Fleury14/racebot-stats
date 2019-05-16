// takes in an array of races and two ids
const parseRivalry = (races, id1, id2) => {
  if(!races || !id1 || !id2) {
    return null;
  }
  // console.log('rivalry!', races, id1, id2);
  const filteredRaces = races.filter(race => 
    race.details.entrants.find(entrant => entrant.id === id1)
    && race.details.entrants.find(entrant => entrant.id === id2)
    && race.details.type.indexOf('2v2') < 0
    && race.details.type.indexOf('2v2beta') < 0
    && race.details.status === 'Completed'
    ).sort((a, b) => {
      const timeA = new Date(a.details.created);
      const timeB = new Date(b.details.created);
      return timeA.getTime() - timeB.getTime();
    });
  return filteredRaces;
}

export default parseRivalry;