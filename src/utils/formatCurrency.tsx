export function formatCurrency(
  amount: number,
  fractionDigits: number = 2,
): string {
  const formatted = amount
    .toFixed(fractionDigits)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `$${formatted}`;
}
