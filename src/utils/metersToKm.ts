export const convertMetersToKm = (meters: string) => {
  const metersToNumber = Number(meters);
  return (metersToNumber / 1000).toFixed(2);
};
