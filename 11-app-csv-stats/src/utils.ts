export const dateStringToDate = (dateString: string): Date => {
  // format = DD/MM/YYYY
  // dateParts[0] = day of month
  // dateParts[1] = month of year
  // dateParts[2] = year
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
