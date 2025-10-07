import { S } from "./Footer.styles";
import { COLORS } from "@/constants/colors";
import { footerPages } from "@/constants/dummyFooter";
import FooterLinkColumn from "@/layout/Footer/FooterLinkColumn";
import SocialLinks from "@/layout/Footer/FooterSocialLinks";
import SignupForm from "@/layout/Footer/SignupForm";

export function Footer() {
  const address = "17 Princess Road, London, Greater London NW1 8JR, UK";

  return (
    <S.Footer>
      <S.FooterBackground $color={COLORS.grey1}>
        <S.FooterTop>
          <S.Column>
            <S.Logo src="/Logo.svg" alt="Hekto Logo" />
            <SignupForm />
            <S.Address>{address}</S.Address>
          </S.Column>
          {footerPages.map((footer) => (
            <FooterLinkColumn
              key={footer.category}
              category={footer.category}
              pages={footer.pages}
            />
          ))}
        </S.FooterTop>
      </S.FooterBackground>
      <S.FooterBackground $color={COLORS.grey2}>
        <S.FooterBottom>
          <S.CopyRight className="p-small">
            ©Webecy - All Rights Reserved
          </S.CopyRight>
          <SocialLinks />
        </S.FooterBottom>
      </S.FooterBackground>
    </S.Footer>
  );
}
