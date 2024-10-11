export const toYMD = (isoStr: string) => {
  const newDate = new Date(isoStr);

  const y = newDate.getFullYear();
  const m = newDate.getMonth() + 1;
  const d = newDate.getDate();

  return { y, m, d };
};
