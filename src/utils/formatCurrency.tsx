export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
  fractionDigits: number = 2,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
}
