// should take in the array of races
const GetCurrentRaces = (data) => {
  if (!data) return [];
  const runningString = 'Running';
  const currentRaces = data.filter(race => race.status === runningString && race.guild && race.guild.name === 'Free Enterprise Workshop');
  return currentRaces;
}

export default GetCurrentRaces;