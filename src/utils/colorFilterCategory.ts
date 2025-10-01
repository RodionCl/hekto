import { COLORS } from "../constants/colors";

export function colorFilterCategory(category: string, value?: string) {
  if (category === "brand") return COLORS.info;
  if (category === "discountPercentage") return COLORS.primary;
  if (category === "category") return COLORS.primary;
  if (category === "rating") return COLORS.secondary;
  if (category === "colors") return value;
}
