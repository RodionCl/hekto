import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";
import { rem } from "@/utils/pxToRem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${rem(100)};
`;

interface BackgroundProps {
  $color: string;
}

const FooterBackground = styled.div<BackgroundProps>`
  display: flex;
  justify-content: center;
  background-color: ${({ $color }) => $color};
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
  padding: ${rem(98, 0)};
  max-width: 300px;
`;

const FooterTop = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const ListPages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

const PageLink = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.grey3};
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${MAX_WIDTH};
  width: 100%;
  padding: ${rem(16, 0)};
`;

const CopyRight = styled.p`
  color: ${COLORS.grey3};
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${rem(16)};
`;

const SocialItem = styled.li`
  img {
    width: ${rem(24)};
    height: ${rem(24)};
  }
`;

export const S = {
  Footer,
  FooterBackground,
  FooterTop,
  Column,
  Logo,
  Address,
  SignUpText,
  ListPages,
  PageLink,
  FooterBottom,
  CopyRight,
  SocialList,
  SocialItem,
};
