// takes in an array of races and two ids
const parseRivalry = (races, id1, id2) => {
  if(!races || !id1 || !id2) {
    return null;
  }
  // console.log('rivalry!', races, id1, id2);
  const filteredRaces = races.items.filter(race => 
    race.entrants.find(entrant => entrant.id === id1)
    && race.entrants.find(entrant => entrant.id === id2)
    && race.type.indexOf('2v2') < 0
    && race.type.indexOf('2v2beta') < 0
    && race.mode !=='2v2'
    && race.status === 'Completed'
    ).sort((a, b) => {
      const timeA = new Date(a.created);
      const timeB = new Date(b.created);
      return timeA.getTime() - timeB.getTime();
    });
  return filteredRaces;
}

export default parseRivalry;