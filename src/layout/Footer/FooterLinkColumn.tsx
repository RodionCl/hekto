import { S } from "./Footer.styles";

interface PageLink {
  label: string;
  url: string;
}

interface FooterLinkColumnProps {
  category: string;
  pages: PageLink[];
}

export default function FooterLinkColumn({
  category,
  pages,
}: FooterLinkColumnProps) {
  return (
    <S.Column>
      <p className="subtitle">{category}</p>
      <S.ListPages>
        {pages.map((page) => (
          <li key={page.label}>
            <S.PageLink to={page.url}>{page.label}</S.PageLink>
          </li>
        ))}
      </S.ListPages>
    </S.Column>
  );
}
