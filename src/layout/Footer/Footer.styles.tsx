import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";
import { rem } from "@/utils/pxToRem";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

const FooterTop = styled.div`
  background-color: ${COLORS.grey2};
  max-width: ${MAX_WIDTH};
  width: 100%;
  display: flex;
`;

const Logo = styled.img`
  width: ${rem(100)};
  height: ${rem(30)};
`;

const Address = styled.p`
  color: ${COLORS.grey3};
`;

const SignUpText = styled.span`
  font-size: ${rem(12)};
  line-height: ${rem(14)};
`;

export const S = { Footer, FooterTop, Column, Logo, Address, SignUpText };
