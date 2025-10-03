import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";
import { rem } from "@/utils/pxToRem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const HeaderTop = styled.div`
  background-color: ${COLORS.tertiary};
  max-width: ${MAX_WIDTH};
  width: 100%;
  color: ${COLORS.white};
  display: flex;
  justify-content: space-between;
  padding: ${rem(14)};
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: ${rem(48)};
`;

const Contact = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const PageActionWrapper = styled.div`
  display: flex;
  gap: ${rem(32)};
`;

const PageAction = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${rem(4)};
  text-decoration: none;
  border: none;
  background: none;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
`;

const HeaderBottom = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  padding: ${rem(16)};
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: ${rem(48)};
`;

const Nav = styled.ul`
  display: flex;
  gap: ${rem(32)};
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: ${COLORS.grey3};
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: ${COLORS.primary};
  }
`;

export const S = {
  Header,
  HeaderTop,
  ContactWrapper,
  Contact,
  PageActionWrapper,
  PageAction,
  HeaderBottom,
  Left,
  Nav,
  StyledNavLink,
};
