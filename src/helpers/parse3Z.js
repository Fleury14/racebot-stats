// expects array of races and array of groups
const parse3Zgroups = (racedata, groups) => {

  // month is 0-indexed
  const startDate = new Date(2020, 7, 2);
  
  // prepare final group date
  const groupResults = [];

  for (let group of groups) {
    const newObj = {
      title: group.group,
      members: [],
      races: []
    }
    for (let member of group.members) {
      newObj.members.push({ id: member, wins: 0, losses: 0 });
    }
    groupResults.push(newObj);
  }
  console.log('groups', groupResults);


  if (!racedata || !groups) return null;
  console.log('parsing', racedata);
  const filteredRaces = racedata.filter(race => {
    if (!race.details && !race.details.created) return false;
    const createDate = new Date(race.details.created);
    return createDate.getTime() > startDate.getTime() &&
      race.details.entrants.length === 2 &&
      race.details.official &&
      race.details.status === 'Completed'
  });
  console.log('filtered', filteredRaces);

  for (let group of groupResults) {
    let hasAllIds = true;
    for (let member of group.members) {
      if (isNaN(parseInt(member.id))) hasAllIds = false;
    }
    if (!hasAllIds) {
      console.log(`Skipping group ${group.title} due to non id`)
      continue;
    }
    
    const thisGroupsRaces = [];
    for (let race of filteredRaces) {
      let racersInGroup = 0;
      for (let entrant of race.details.entrants) {
        if(group.members.filter(member => member.id === entrant.id).length) {
          racersInGroup++;
        }
      }
      if (racersInGroup === 2) thisGroupsRaces.push(race);
    }
    
    for (let race of thisGroupsRaces) {
      if (group.races.indexOf(race.key) < 0) group.races.push(race.key);
      const winner = race.details.entrants.find(entrant => entrant.placement === 1);
      const winnerInGroup = group.members.find(member => member.id === winner.id);
      winnerInGroup.wins++;
      const loser = race.details.entrants.find(entrant => entrant.placement === 2 || !entrant.placement);
      const loserInGroup = group.members.find(member => member.id === loser.id);
      loserInGroup.losses++;
    }
    
  }

  console.log('groupresults', groupResults);
}

export { parse3Zgroups};