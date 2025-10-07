import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ICON_SIZES } from "@/constants/iconSizes";
import { S } from "./Header.styles";
import PageAction from "@/layout/Header/components/PageAction";
import { currencyOptions, languageOptions } from "@/constants/pageActions";
import { ROUTE_TOKENS } from "@/constants/routes";
import { useCart } from "@/contexts/CartContext";

export default function UserActions() {
  const iconSize = { fontSize: ICON_SIZES.medium };
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("usd");
  const { items } = useCart();

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };

  return (
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
      <S.PageAction to={ROUTE_TOKENS.login}>
        Login
        <PersonOutlinedIcon sx={iconSize} />
      </S.PageAction>
      <S.PageAction to={ROUTE_TOKENS.wishlist}>
        Wishlist
        <FavoriteBorderOutlinedIcon sx={iconSize} />
      </S.PageAction>
      <S.PageAction to={ROUTE_TOKENS.cart}>
        <ShoppingCartOutlinedIcon sx={iconSize} />
        <S.CartCounter>{items.length}</S.CartCounter>
      </S.PageAction>
    </S.PageActionWrapper>
  );
}
