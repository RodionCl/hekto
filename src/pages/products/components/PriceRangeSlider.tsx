import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Slider, Box } from "@mui/material";
import { COLORS } from "../../../constants/colors";

interface PriceRangeSliderProps {
  minBoundary: number;
  maxBoundary: number;
}

export default function PriceRangeSlider({
  minBoundary,
  maxBoundary,
}: PriceRangeSliderProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const clamp = (value: number) =>
    Math.min(Math.max(value, minBoundary), maxBoundary);

  const getClampedParam = (key: string, fallback: number) => {
    const value = Number(searchParams.get(key));
    return isNaN(value) || value === 0 ? fallback : clamp(value);
  };

  const [sliderValue, setSliderValue] = useState<number[]>([
    getClampedParam("price_gte", minBoundary),
    getClampedParam("price_lte", maxBoundary),
  ]);

  useEffect(() => {
    const priceGteExists = searchParams.has("price_gte");
    const priceLteExists = searchParams.has("price_lte");
    if (!priceGteExists && !priceLteExists) return;

    const [minVal, maxVal] = sliderValue.map(clamp);
    const params = new URLSearchParams(searchParams);

    if (
      minVal !== Number(params.get("price_gte")) ||
      maxVal !== Number(params.get("price_lte"))
    ) {
      params.set("price_gte", String(minVal));
      params.set("price_lte", String(maxVal));
      setSearchParams(params, { replace: true });
    }

    setSliderValue([minVal, maxVal]);
  }, [minBoundary, maxBoundary]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
  };

  const handleCommit = (
    _: Event | React.SyntheticEvent,
    newValue: number | number[],
  ) => {
    const [newMin, newMax] = newValue as number[];
    const params = new URLSearchParams(searchParams);
    params.set("price_gte", String(newMin));
    params.set("price_lte", String(newMax));
    setSearchParams(params, { replace: true });
  };

  return (
    <Box>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        onChangeCommitted={handleCommit}
        min={minBoundary}
        max={maxBoundary}
        valueLabelDisplay="auto"
        getAriaValueText={(val) => `$${val}`}
        sx={{
          "& .MuiSlider-track": {
            backgroundColor: COLORS.primary,
            border: "none",
          },
          "& .MuiSlider-thumb": {
            backgroundColor: COLORS.primaryDark,
          },
          "& .MuiSlider-rail": {
            backgroundColor: COLORS.primaryLight,
          },
        }}
      />
      <p style={{ textAlign: "center", marginTop: 0 }}>
        ${sliderValue[0]} - ${sliderValue[1]}
      </p>
    </Box>
  );
}
