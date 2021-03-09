export default function parseTime(total) {
  const seconds = total % 60;
  const minutes = Math.floor(total % 3600 / 60);
  const hours = Math.floor(total / 3600);

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}