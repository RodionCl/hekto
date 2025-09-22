import { Button } from "@mui/material";
import { cv } from "../utils/cssVar";
import { COLORS } from "../constants/colors";
import { ReactNode } from "react";

interface ButtonProps {
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
  borderRadius = "0.8rem",
  padding = "1.6rem 4rem",
  ...props
}: ButtonProps) {
  const bgColorValue = cv(bgColor);
  const bgColorHoverValue = cv(bgColorHover);

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
