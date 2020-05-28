// takes in an array of races and the racedata and filters the data accordingly
// TODO: pull from redux directly

const GetRaceInfo = (raceArr, raceData) => {
  if (!raceArr || !raceData) return null;
  const resultArr = [];
  // console.log('race data', raceData);
  raceArr.forEach(racetag => {
    const eachRaceData = raceData.items.find(race => race.key === racetag);
    resultArr.push(eachRaceData);
  });
  return resultArr;
}

export default GetRaceInfo;