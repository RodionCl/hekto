import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { ICON_SIZES } from "@/constants/iconSizes";
import { S } from "./Header.styles";

export default function ContactInfo() {
  const email = "hekto@gmail.com";
  const phone = "(12345)67890";
  const iconSize = { fontSize: ICON_SIZES.medium };

  return (
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
  );
}
