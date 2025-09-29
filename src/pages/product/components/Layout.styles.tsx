import styled from "styled-components";
import { rem } from "../../../utils/pxToRem";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../../constants/colors";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${COLORS.grey3};
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: ${COLORS.primary};
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${COLORS.grey2};
  border-radius: 50%;
`;

export const PageFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${rem(64)};
  width: 100%;
`;
