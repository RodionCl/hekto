import { Button, ButtonProps } from "@mui/material";
import { COLORS } from "../constants/colors";
import { ReactNode } from "react";
import { rem } from "../utils/pxToRem";

export interface AppButtonProps extends ButtonProps {
  children: ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  borderRadius?: string;
  padding?: string;
}

export default function AppButton({
  children,
  bgColor = COLORS.primary,
  bgColorHover = COLORS.primaryDark,
  borderRadius = rem(8),
  padding = rem(16, 40),
  ...props
}: AppButtonProps) {
  const bgColorValue = bgColor;
  const bgColorHoverValue = bgColorHover;

  return (
    <Button
      variant="contained"
      disableRipple
      {...props}
      sx={{
        borderRadius: borderRadius,
        padding: padding,
        textTransform: "none",
        backgroundColor: bgColorValue,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: bgColorHoverValue,
        },
        "&:focus-visible": {
          boxShadow: "none",
          backgroundColor: bgColorHoverValue,
          outline: "1px solid Highlight",
        },
      }}
    >
      {children}
    </Button>
  );
}
