const filterFERaces = (races) => {
  if (races.items) {
    races.items = races.items.filter(item => item.details && item.details.game === 'ff4fe' && item.details.guild && (
      item.details.guild === '411615349579186178' || (item.details.guild.id && item.details.guild.id === '411615349579186178')
    ));
  }
  return races;
}

export default filterFERaces;