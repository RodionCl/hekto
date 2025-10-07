import { S } from "./Footer.styles";
import { socialLinks } from "@/constants/dummyFooter";

export default function SocialLinks() {
  return (
    <S.SocialList>
      {socialLinks.map((social) => (
        <S.SocialItem key={social.label}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={social.img} alt={social.label} />
          </a>
        </S.SocialItem>
      ))}
    </S.SocialList>
  );
}
