import { IconButton, IconButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

export interface AppButtonProps extends IconButtonProps {
  children: ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  borderRadius?: string;
  padding?: string;
  textColor?: string;
  withBackground?: boolean;
}

export default function AppIconButton({
  children,
  bgColor = COLORS.primary,
  bgColorHover = COLORS.primaryDark,
  borderRadius = rem(8),
  padding = rem(8),
  textColor = COLORS.white,
  withBackground = true,
  color,
  ...props
}: AppButtonProps) {
  const bgColorValue = withBackground ? bgColor : "transparent";
  const bgColorHoverValue = bgColorHover;

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
        color: textColor,
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
