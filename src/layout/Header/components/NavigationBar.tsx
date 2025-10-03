import { ROUTE_TOKENS } from "@/constants/routes";
import { S } from "./Header.styles";

const navItems = [
  { to: ROUTE_TOKENS.home, label: "Home" },
  { to: ROUTE_TOKENS.products, label: "Products" },
  { to: ROUTE_TOKENS.blog, label: "Blog" },
  { to: ROUTE_TOKENS.contacts, label: "Contacts" },
];

export default function NavigationBar() {
  return (
    <S.Left>
      <img src="/Logo.svg" alt="Hekto Logo" />
      <S.Nav>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <S.StyledNavLink
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </S.StyledNavLink>
          </li>
        ))}
      </S.Nav>
    </S.Left>
  );
}
