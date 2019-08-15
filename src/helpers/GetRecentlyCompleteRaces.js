// should take in an array of races
const GetRecentlyCompleteRaces = (data) => {
  if (!data) return [];
  const completedString = 'Completed';
  let filteredData = data.filter(race => race.details.status && race.details.finishTime && race.details.status === completedString && race.details.guild && race.details.guild.name === 'Free Enterprise Workshop');
  filteredData.sort((race1, race2) => {
    const finished1 = new Date(race1.details.finishTime);
    const finished2 = new Date(race2.details.finishTime);
    return finished2.getTime() - finished1.getTime();
  });
  return filteredData.slice(0, 5);
}

export default GetRecentlyCompleteRaces;
