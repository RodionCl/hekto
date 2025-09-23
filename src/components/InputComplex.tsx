import {
  OutlinedInput,
  FormControl,
  OutlinedInputProps,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { cv } from "../utils/cssVar";
import { visuallyHidden } from "@mui/utils";
import { COLORS } from "../constants/colors";
import { rem } from "../utils/pxToRem";
import { ReactNode } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ICON_SIZES } from "../constants/iconSizes";

interface InputProps extends OutlinedInputProps {
  width?: string;
  border?: string;
  name: string;
  label?: string;
  hasError: boolean;
  endAdornmentButton?: ReactNode;
}

export default function InputComplex({
  width = "100%",
  border = `1px solid ${cv(COLORS.grey2)}`,
  name,
  label,
  endAdornmentButton,
  hasError,
  ...props
}: InputProps) {
  let inputEnd: ReactNode = endAdornmentButton;
  if (!endAdornmentButton && hasError) {
    inputEnd = (
      <ErrorOutlineIcon
        sx={{
          fontSize: ICON_SIZES.big,
          border: "none",
          color: cv(COLORS.danger),
        }}
      />
    );
  }

  return (
    <FormControl sx={{ width }} variant="outlined">
      <InputLabel htmlFor={name} sx={visuallyHidden} shrink>
        {label}
      </InputLabel>
      <OutlinedInput
        {...props}
        name={name}
        id={name}
        error={hasError}
        sx={{
          padding: `${rem(2, 2, 2, 16)}`,
          "& .MuiOutlinedInput-input": {
            padding: rem(10, 0),
            fontSize: rem(14),
            lineHeight: rem(16),
            height: "auto",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: cv(COLORS.danger),
          },
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ padding: "0" }}>
            {inputEnd}
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
