const parseZZ6Standings = (standings) => {
  if (!standings) return [];

  const SHEET_REF = {
    GROUP: "_18",
    NAME: "",
  };


  const players = standings.filter(standing => {
    if (standing[SHEET_REF.NAME] === "Racer") return false;
    if (standing[SHEET_REF.NAME] === '') return false;
    return true;
  });

  const groups = {
    macGiant: players.filter(player => player[SHEET_REF.GROUP] === 'MacGiant'),
    dMachin: players.filter(player => player[SHEET_REF.GROUP] === 'D.Machin'),
    yellowD: players.filter(player => player[SHEET_REF.GROUP] === 'Yellow D.'),
    warlock: players.filter(player => player[SHEET_REF.GROUP] === 'Warlock'),
  }

  return(groups);
}

export default parseZZ6Standings;