import styled from "styled-components";
import AppButton from "./AppButton";
import { COLORS } from "../constants/colors";
import { ReactNode } from "react";
import { rem } from "../utils/pxToRem";

const ButtonText = styled.p`
  font-size: ${rem(12)};
  font-family: "Josefin", sans-serif;
  line-height: ${rem(14)};
`;

interface ButtonProps {
  children: ReactNode;
}

export default function SuccessButton({ children }: ButtonProps) {
  return (
    <AppButton
      bgColor={COLORS.success}
      bgColorHover={COLORS.successDark}
      padding={rem(11, 16)}
      borderRadius={rem(6)}
    >
      <ButtonText>{children}</ButtonText>
    </AppButton>
  );
}
