import { Rating } from "@mui/material";
import { COLORS } from "../constants/colors";
import { CATEGORIES } from "../constants/categories";

export function colorFilterCategory(category: string, value?: string) {
  if (category === CATEGORIES.brand) return COLORS.info;
  if (category === CATEGORIES.discount) return COLORS.primary;
  if (category === CATEGORIES.category) return COLORS.primary;
  if (category === CATEGORIES.rating) return COLORS.secondary;
  if (category === CATEGORIES.colors) return value;
}

export function labelCategory(category: string, value: string | number) {
  if (category === CATEGORIES.rating)
    return (
      <label htmlFor={`${category}-${value}`}>
        <Rating name="read-only" value={+value} readOnly />
      </label>
    );
  if (category === CATEGORIES.discount)
    return <label htmlFor={`${category}-${value}`}>{value}%</label>;
  else return <label htmlFor={`${category}-${value}`}>{value}</label>;
}
