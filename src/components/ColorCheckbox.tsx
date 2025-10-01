import { Checkbox, CheckboxProps } from "@mui/material";
import { COLORS } from "../constants/colors";

interface ColorCheckboxProps extends CheckboxProps {
  customColor?: string;
}

export default function ColorCheckbox({
  customColor = COLORS.info,
  ...props
}: ColorCheckboxProps) {
  return (
    <Checkbox
      {...props}
      sx={{
        color: customColor,
        "&.Mui-checked": {
          color: customColor,
        },
        padding: 0,
      }}
    />
  );
}
