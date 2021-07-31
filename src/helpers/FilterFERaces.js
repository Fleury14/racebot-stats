function withinLastYear(date) {
  const currentDate = new Date(Date.now()).getTime();
  const raceDate = new Date(date).getTime();
  return currentDate - raceDate < 1000 * 60 * 60 * 24 * 180;
}

const filterFERaces = (races) => {
  if (races.items) {
    races.items = races.items.filter(item => item && item.game === 'ff4fe' && item.guild && item.created && withinLastYear(item.created) && (
      item.guild === '411615349579186178' || (item.guild.id && item.guild.id === '411615349579186178')    
    ));
  }
  return races;
}

export default filterFERaces;