import PriceRangeSlider from "@/components/PriceRangeSlider";

interface RangeFilterProps {
  min: number;
  max: number;
}

export default function RangeFilter({ min, max }: RangeFilterProps) {
  return (
    <li style={{ width: "100%", padding: "0 1rem" }}>
      <PriceRangeSlider minBoundary={min} maxBoundary={max} />
    </li>
  );
}
