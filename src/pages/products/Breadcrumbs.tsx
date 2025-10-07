import { ROUTE_TOKENS } from "@/constants/routes";
import { NavWrapper, StyledNavLink, Dot } from "./Layout.styles";
export default function Breadcrumbs() {
  return (
    <NavWrapper>
      <StyledNavLink
        to={`${ROUTE_TOKENS.home}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </StyledNavLink>
      <Dot />
      <StyledNavLink
        to={`${ROUTE_TOKENS.products}`}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </StyledNavLink>
    </NavWrapper>
  );
}
