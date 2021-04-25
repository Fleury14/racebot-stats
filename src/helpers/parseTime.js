export default function parseTime(total, isPlayoff, isWinner) {
  // account for non-numbers in the event of a non-standard time
  if (isNaN(total)) {
    switch (total) {
      case 'Forced Win':
        return 'Forced Win';
      default:
        return isPlayoff ? isWinner ? "Advantage Win" : "Advantage Loss" : "Forfeit";
    }
    
  };
  const seconds = total % 60;
  const minutes = Math.floor(total % 3600 / 60);
  const hours = Math.floor(total / 3600);

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}