export const convertSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
};
