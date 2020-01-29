const parseGauntlet = (raceResponse) => {
  const gauntFlags = 'Orandom:5/win:crystal Kmain/summon/moon Pkey Cstandard/j:abilities Tstandard Sstandard Bstandard/alt:gauntlet Nchars/key Etoggle Glife -kit:basic -noadamants';
  if (!raceResponse.items) return null;
  const allRaces = raceResponse.items;
  
  const gauntletRaces = allRaces.filter(race => race.details && race.details.metadata && race.details.metadata.Flags === gauntFlags);
  const moreThan10 = gauntletRaces.filter(race => race.details.entrants.length > 10)
  

  const winningTimes = [];
  const top3Times = [];
  moreThan10.forEach(race => {
    if (race.details.status === 'Running') return;
    const winner = race.details.entrants.find(entrant => entrant.placement === 1);
    const finishString = winner.finish;
    const nums = finishString.split(':');
    const seconds = (parseInt(nums[0]) * 3600) + (parseInt(nums[1]) * 60) + parseInt(nums[2]);
    winningTimes.push(seconds);
    top3Times.push(seconds);

    const twowinner = race.details.entrants.find(entrant => entrant.placement === 2);
    const twofinishString = twowinner.finish;
    const twonums = twofinishString.split(':');
    const twoseconds = (parseInt(twonums[0]) * 3600) + (parseInt(twonums[1]) * 60) + parseInt(twonums[2]);
    top3Times.push(twoseconds);

    const threewinner = race.details.entrants.find(entrant => entrant.placement === 3);
    const threefinishString = threewinner.finish;
    const threenums = threefinishString.split(':');
    const threeseconds = (parseInt(threenums[0]) * 3600) + (parseInt(threenums[1]) * 60) + parseInt(threenums[2]);
    
    top3Times.push(threeseconds);
  });

  let sum = 0;
  for (let num of winningTimes) {
    sum += num;
  }
  const avg = sum / winningTimes.length;

  let sum2 = 0;
  for (let num of top3Times) {
    sum2 += num;
  }
  const avg2 = sum2 / top3Times.length;
  console.log('average seconds winning time', avg, formatTime(avg));
  console.log('average seconds top 3', avg2, formatTime(avg2));
  
}

function formatTime(num) {
  const hrs = Math.floor(num / 3600);
  const mins = Math.floor((num % 3600) / 60);
  const secs = num % 60;
  return `${hrs}:${mins}:${secs}`;
}

export default parseGauntlet;