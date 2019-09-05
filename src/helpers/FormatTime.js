// takes in a number of milliseconds, returns a displayable string
const FormatTime = (milliseconds) => {
  let dateString = '';
  if (milliseconds > 1000 * 60 * 60) {
    dateString += `${Math.floor(milliseconds / 1000 / 60 / 60)}:`;
  }
  const minutes = milliseconds % (1000 * 60 * 60);
  dateString += `${dateString.length > 0 && Math.floor(minutes / 1000 / 60) < 10 ? '0' : ''}${Math.floor(minutes / 1000 / 60)}:`;

  const seconds = minutes % (1000 * 60);
  dateString += `${Math.floor(seconds/1000) < 10 ? '0' : ''}${Math.floor(seconds / 1000)}`;
  return dateString;
}

export default FormatTime;