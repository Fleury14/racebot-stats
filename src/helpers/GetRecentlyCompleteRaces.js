// should take in an array of races
const GetRecentlyCompleteRaces = (data) => {
  const completedString = 'Completed';
  let filteredData = data.filter(race => race.details.status && race.details.finishTime && race.details.status === completedString);
  filteredData.sort((race1, race2) => {
    const finished1 = new Date(race1.details.finishTime);
    const finished2 = new Date(race2.details.finishTime);
    return finished2.getTime() - finished1.getTime();
  });
  return filteredData.slice(0, 5);
}

export default GetRecentlyCompleteRaces;