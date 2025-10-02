import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ICON_SIZES } from "@/constants/iconSizes";
import { S } from "./components/Header.styles";
import { SelectChangeEvent } from "@mui/material";
import PageAction from "@/layout/Header/components/PageAction";
import { currencyOptions, languageOptions } from "@/constants/pageActions";

export function Header() {
  const email = "hekto@gmail.com";
  const phone = "(12345)67890";
  const iconSize = { fontSize: ICON_SIZES.medium };

  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const [currency, setCurrency] = useState("usd");

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
    <S.Header>
      <S.HeaderTop>
        <S.ContactWrapper>
          <S.Contact href={`mailto:${email}`}>
            <EmailOutlinedIcon sx={iconSize} />
            {email}
          </S.Contact>
          <S.Contact href={`tel:+${phone}`}>
            <LocalPhoneOutlinedIcon sx={iconSize} />
            {phone}
          </S.Contact>
        </S.ContactWrapper>

        <S.PageActionWrapper>
          <PageAction
            labelId="language-select-label"
            value={language}
            onChange={handleChangeLanguage}
            options={languageOptions}
          />
          <PageAction
            labelId="currency-select-label"
            value={currency}
            onChange={handleChangeCurrency}
            options={currencyOptions}
          />
          <S.PageAction to="/login">
            Login
            <PersonOutlinedIcon sx={iconSize} />
          </S.PageAction>
          <S.PageAction to="/wishlist">
            Wishlist
            <FavoriteBorderOutlinedIcon sx={iconSize} />
          </S.PageAction>
          <S.PageAction to="/cart">
            <ShoppingCartOutlinedIcon sx={iconSize} />
          </S.PageAction>
        </S.PageActionWrapper>
      </S.HeaderTop>
      <S.HeaderBottom>
        <h1>Header Bottom</h1>
      </S.HeaderBottom>
    </S.Header>
  );
}
