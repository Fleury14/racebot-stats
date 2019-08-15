// should take in the array of races
const GetCurrentRaces = (data) => {
  if (!data) return [];
  const runningString = 'Running';
  const currentRaces = data.filter(race => race.details.status === runningString && race.details.guild && race.details.guild.name === 'Free Enterprise Workshop');
  return currentRaces;
}

export default GetCurrentRaces;