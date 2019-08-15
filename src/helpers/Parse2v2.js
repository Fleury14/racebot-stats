// should take in an array of races
const parse2v2Data = (data) => {
  const teams = [];
  const completedString = 'Completed';
  const twov2String = '2v2';

  // loop through each race
  for (let race of data.items) {
    // skip over races that arent complete and arent 2v2's
    // if (race.details.mode !== twov2String) console.log('not finished');
    if (race.details.status !== completedString || (race.details.mode !== twov2String && race.key.indexOf('2v2') && race.details.type.indexOf('2v2') < 0)) {
      continue;
    }
    const startTime = new Date(race.details.startTime);
    
    // loop through entrants
    for (let entrant of race.details.entrants) {
      const partner = race.details.entrants.find(partner => partner.team === entrant.team && partner.id !== entrant.id);
      if (!partner) {
        continue;
        // TODO: account for solo teams
      }
      if (!teams.find(team => (team.racer1Id === entrant.id && team.racer2Id === partner.id) || (team.racer2Id === entrant.id && team.racer1Id === partner.id))) {
        
        teams.push({
          racer1Name: entrant.name,
          racer1Id: entrant.id,
          racer2Name: partner ? partner.name : null,
          racer2Id: partner ? partner.id : null,
          races_entered: [],
          wins: 0,
          losses: 0,
        });
      }

      // now that team creation is accounted for, lets go through the entrants a second time.
      // one thing that will be done differently is that the race key will be stored inside the teams races completed array
      // this is to make sure we arent adding a win or loss twice, once for each team member
      const myTeam = teams.find(team => (team.racer1Id === entrant.id && team.racer2Id === partner.id) || (team.racer2Id === entrant.id && team.racer1Id === partner.id));
      if (myTeam.races_entered.indexOf(race.key) < 0) {
        for (let opponent of race.details.entrants) {
          const myPartner = race.details.entrants.find(partner => partner.team === entrant.team && partner.id !== entrant.id);
          const opponentPartner = race.details.entrants.find(partner => partner.team === opponent.team && partner.id !== opponent.id);
          if (!myPartner || !opponentPartner) {
            continue;
            // todo more solo team support
          }
          // make sure we're not going against ourselves
          if (entrant.id === opponent.id || entrant.id === opponentPartner.id) {
            continue;
          }
          const opponentTime = new Date(opponent.finishTime);
          const opponentPartnerTime = new Date(opponentPartner.finishTime);
          const myTime = new Date(entrant.finishTime);
          const myPartnerTime = new Date(myPartner.finishTime);
          const myTeamTime = (myTime.getTime() - startTime.getTime()) + (myPartnerTime.getTime() - startTime.getTime());
          const opponentTeamTime = (opponentTime.getTime() - startTime.getTime()) + (opponentPartnerTime.getTime() - startTime.getTime());

          // for testing my data
          // if (entrant.name === 'Fleury14' || partner.name === 'Fleury14') {
          //   console.log(entrant.name, partner.name, myTeamTime, opponent.name, opponentPartner.name, opponentTeamTime, race.key);
          // }

          // because each opposing team will be hit twice, increase wins/losses by 0.5
          // TODO: there must be a better workaround than this lol
          if (myTeamTime < opponentTeamTime) {
            myTeam.wins += 0.5;
          }

          if (myTeamTime > opponentTeamTime) {
            myTeam.losses += 0.5;
          }
        }
        myTeam.races_entered.push(race.key);
      }
      
    }
  }
  return teams;
}

export default parse2v2Data;