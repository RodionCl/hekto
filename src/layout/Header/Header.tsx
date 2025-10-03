import { S } from "./components/Header.styles";
import ContactInfo from "./components/ContactInfo";
import UserActions from "./components/UserActions";
import NavigationBar from "./components/NavigationBar";
import SearchForm from "./components/SearchForm";

export function Header() {
  return (
    <S.Header>
      <S.HeaderTop>
        <ContactInfo />
        <UserActions />
      </S.HeaderTop>
      <S.HeaderBottom>
        <NavigationBar />
        <SearchForm />
      </S.HeaderBottom>
    </S.Header>
  );
}
