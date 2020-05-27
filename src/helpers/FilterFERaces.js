const filterFERaces = (races) => {
  if (races.items) {
    races.items = races.items.filter(item => item.details && item.details.game === 'ff4fe');
  }
  return races;
}

export default filterFERaces;