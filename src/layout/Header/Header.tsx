import { S } from "./components/Header.styles";
import ContactInfo from "./components/ContactInfo";
import UserActions from "./components/UserActions";
import NavigationBar from "./components/NavigationBar";
import SearchForm from "./components/SearchForm";
import { COLORS } from "@/constants/colors";

export function Header() {
  return (
    <S.Header>
      <S.HeaderWrapper $color={COLORS.tertiary}>
        <S.HeaderTop>
          <ContactInfo />
          <UserActions />
        </S.HeaderTop>
      </S.HeaderWrapper>
      <S.HeaderWrapper $color={COLORS.white}>
        <S.HeaderBottom>
          <NavigationBar />
          <SearchForm />
        </S.HeaderBottom>
      </S.HeaderWrapper>
    </S.Header>
  );
}
