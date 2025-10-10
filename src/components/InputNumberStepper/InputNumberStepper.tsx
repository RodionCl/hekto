import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import ActionButton from "@/components/InputNumberStepper/ActionButton";
import React, { useState, useEffect } from "react";

const inputStyles = {
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& .MuiInputBase-input": {
    textAlign: "center",
    paddingLeft: "4px",
    paddingRight: "4px",
  },
};

interface InputNumberStepperProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  min?: number;
  max?: number;
}

export function InputNumberStepper({
  value,
  onIncrement,
  onDecrement,
  onChange,
  onBlur,
  id = "stepper-input",
  min = -Infinity,
  max = Infinity,
}: InputNumberStepperProps) {
  const [inputValue, setInputValue] = useState<number | string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    } else {
      setInputValue(value);
    }
  };

  const decrementButton = (
    <ActionButton
      type="decrement"
      onClick={onDecrement}
      disabled={Number(value) <= min}
    />
  );

  const incrementButton = (
    <ActionButton
      type="increment"
      onClick={onIncrement}
      disabled={Number(value) >= max}
    />
  );

  return (
    <Box sx={{ width: 150 }}>
      <FormControl variant="outlined" size="small" fullWidth>
        <OutlinedInput
          id={id}
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          startAdornment={decrementButton}
          endAdornment={incrementButton}
          inputProps={{
            min,
            max,
          }}
          sx={inputStyles}
        />
      </FormControl>
    </Box>
  );
}
