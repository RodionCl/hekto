import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { rem } from "@/utils/pxToRem";
import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${MAX_WIDTH};
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

export const SelectListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(16)};
`;

export const SelectListLabel = styled.div`
  color: ${COLORS.grey3};
`;

export const FilterListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: ${rem(16)};
`;

export const GridWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const StyledMain = styled.main<{ $isGrid: boolean }>`
  display: ${({ $isGrid }) => ($isGrid ? "grid" : "flex")};
  gap: ${rem(32)};
  flex-direction: column;
  flex: 1;
  width: 100%;

  ${({ $isGrid }) =>
    $isGrid &&
    `
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `}
`;
