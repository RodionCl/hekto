import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import ActionButton from "@/components/InputNumberStepper/ActionButton";

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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

export default function InputNumberStepper({
  value,
  onIncrement,
  onDecrement,
  onChange,
  min = -Infinity,
  max = Infinity,
}: InputNumberStepperProps) {
  const decrementButton = (
    <ActionButton
      type="decrement"
      onClick={onDecrement}
      disabled={value <= min}
    />
  );

  const incrementButton = (
    <ActionButton
      type="increment"
      onClick={onIncrement}
      disabled={value >= max}
    />
  );

  return (
    <Box sx={{ width: 150 }}>
      <FormControl variant="outlined" size="small" fullWidth>
        <OutlinedInput
          id="stepper-input"
          type="number"
          value={value}
          onChange={onChange}
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
