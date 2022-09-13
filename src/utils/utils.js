export const formatSecondsToReadableTime = (secondsToFormat) => {
  const hours = Math.floor(secondsToFormat / 3600);
  const minutes = Math.floor((secondsToFormat - hours * 3600) / 60);
  const seconds = secondsToFormat - hours * 3600 - minutes * 60;

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
