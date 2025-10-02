import { NavWrapper, StyledNavLink, Dot } from "./Layout.styles";
export default function Breadcrumbs() {
  return (
    <NavWrapper>
      <StyledNavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </StyledNavLink>
      <Dot />
      <StyledNavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </StyledNavLink>
    </NavWrapper>
  );
}
