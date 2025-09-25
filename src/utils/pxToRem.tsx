const base = 10;
export function rem(...args: (number | string)[]): string {
  const pxValues: (number | string)[] = [];

  for (const arg of args) {
    pxValues.push(arg);
  }

  return pxValues
    .map((px) => {
      const value = typeof px === "string" ? parseFloat(px) : px;
      return `${value / base}rem`;
    })
    .join(" ");
}
