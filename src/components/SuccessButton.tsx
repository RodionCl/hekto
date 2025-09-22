import styled from "styled-components";
import AppButton from "./AppButton";
import { COLORS } from "../constants/colors";
import { ReactNode } from "react";

const ButtonText = styled.p`
  font-size: 1.2rem;
  font-family: "Josefin", sans-serif;
  line-height: 1.4rem;
`;

interface ButtonProps {
  children: ReactNode;
}

export default function SuccessButton({ children }: ButtonProps) {
  return (
    <AppButton
      bgColor={COLORS.success}
      bgColorHover={COLORS.successDark}
      padding="1.1rem 1.6rem"
      borderRadius="0.6rem"
    >
      <ButtonText>{children}</ButtonText>
    </AppButton>
  );
}
