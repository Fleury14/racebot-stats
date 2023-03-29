const parseEEL = () => {

// set teams object (fake)
const teams = [];
const TEAMSIZE = 4;
const TEAMCOUNT = 25;
for (let i = 0; i < TEAMCOUNT; i++)
{
  const newTeam = {
    name: `Team ${i + 1}`,
    members: [
      { name: `Player ${(i * 4) + 1}`, id: (i * 4) + 1, wins: 0, losses: 0, ties: 0 },
      { name: `Player ${(i * 4) + 2}`, id: (i * 4) + 1, wins: 0, losses: 0, ties: 0 },
      { name: `Player ${(i * 4) + 3}`, id: (i * 4) + 1, wins: 0, losses: 0, ties: 0 },
      { name: `Player ${(i * 4) + 4}`, id: (i * 4) + 1, wins: 0, losses: 0, ties: 0 },
    ],
    wins: 0,
    losses: 0,
    ties: 0,
    points: 0,
    matchWins: 0,
    matchLosses: 0,
    matchTies: 0
  }
  teams.push(newTeam)
}

// set games object (fake)

// sort teams by 1. points (desc), 2. games played (asc) for mid week, 3. match wins
teams.sort((a, b) => {
  if (a.points !== b.points) return b.points - a.points;
  if (a.wins + a.losses + a.ties !== b.wins + b.losses + b.ties) return (a.wins + a.losses + a.ties) - (b.wins + b.losses + b.ties);
  return b.matchWins - a.matchWins 
});

return { teams };

}

export default parseEEL;