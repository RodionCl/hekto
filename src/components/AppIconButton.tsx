import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import { COLORS } from "../constants/colors";
import { cv } from "../utils/cssVar";

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  borderRadius?: string;
  padding?: string;
  color?: string;
  withBackground?: boolean;
}

export default function AppIconButton({
  children,
  bgColor = COLORS.primary,
  bgColorHover = COLORS.primaryDark,
  borderRadius = "0.8rem",
  padding = "0.8rem",
  color = COLORS.white,
  withBackground = true,
  ...props
}: ButtonProps) {
  const bgColorValue = withBackground ? cv(bgColor) : "transparent";
  const bgColorHoverValue = withBackground ? cv(bgColorHover) : "transparent";

  return (
    <IconButton
      {...props}
      disableRipple
      sx={{
        borderRadius: borderRadius,
        padding: padding,
        textTransform: "none",
        backgroundColor: bgColorValue,
        boxShadow: "none",
        color: cv(color),
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
    </IconButton>
  );
}
