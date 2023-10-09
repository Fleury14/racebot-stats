// expecting the an array of object parsed from the google sheet in the expected layout
// teamName, Team_Captain, p1_Discord, p1_Twitch, p2_Discord, p2_Twitch, p3_Discord, p3_Twitch, p4_Discord, p4_Twitch

import { isArrayOrNodeList } from "reactstrap/lib/utils";

const parseEELRoster = (data) => {
  const teams = [];
  if (!isArrayOrNodeList(data)) return [];
  data.forEach(team => {
    const newTeam = {
      name: team["Team Name"],
      captain: team.Team_Captain,
      members: [
        { name: team.p1_Discord, wins: 0, losses: 0, ties: 0 },
        { name: team.p2_Discord, wins: 0, losses: 0, ties: 0 },
        { name: team.p3_Discord, wins: 0, losses: 0, ties: 0 },
        { name: team.p4_Discord, wins: 0, losses: 0, ties: 0 },
      ],
      wins: 0,
      losses: 0,
      ties: 0,
      points: 0,
      matchWins: 0,
      matchLosses: 0,
      matchTies: 0
    }
    if (team.sub1_Discord) {
      newTeam.members.push({ name: team.sub1_Discord, wins: 0, losses: 0, ties: 0 });
    }
    newTeam.members.sort((a, b) => a.name.length - b.name.length);
    teams.push(newTeam);
  });

  // sort teams by 1. points (desc), 2. games played (asc) for mid week, 3. match wins
  teams.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    if (a.wins + a.losses + a.ties !== b.wins + b.losses + b.ties) return (a.wins + a.losses + a.ties) - (b.wins + b.losses + b.ties);
    return b.matchWins - a.matchWins 
  });

  return teams;
}

export default parseEELRoster;