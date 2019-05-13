// should take in the array of races
const GetCurrentRaces = (data) => {
  if (!data) return [];
  const runningString = 'Running';
  const currentRaces = data.filter(race => race.details.status === runningString);
  return currentRaces;
}

export default GetCurrentRaces;