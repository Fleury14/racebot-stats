// should take in an array of races
const GetRecentlyCompleteRaces = (data) => {
  if (!data) return [];
  const completedString = 'Completed';
  let filteredData = data.filter(race => race.status && race.finishTime && race.status === completedString && race.guild && race.guild.name === 'Free Enterprise Workshop');
  filteredData.sort((race1, race2) => {
    const finished1 = new Date(race1.finishTime);
    const finished2 = new Date(race2.finishTime);
    return finished2.getTime() - finished1.getTime();
  });
  return filteredData.slice(0, 5);
}

export default GetRecentlyCompleteRaces;
