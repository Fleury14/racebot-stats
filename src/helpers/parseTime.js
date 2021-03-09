export default function parseTime(total) {
  // account for non-numbers in the event of a forfeit
  if (isNaN(total)) return "Forfeit";
  const seconds = total % 60;
  const minutes = Math.floor(total % 3600 / 60);
  const hours = Math.floor(total / 3600);

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}