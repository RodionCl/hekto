import styled from "styled-components";
import { cv } from "../utils/cssVar";
import { COLORS } from "../constants/colors";
import AppButton from "../components/AppButton";
import SuccessButton from "../components/SuccessButton";
import AppIconButton from "../components/AppIconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ICON_SIZES } from "../constants/iconSizes";

const Div = styled.div<{ $color: string }>`
  width: 90px;
  height: 90px;
  background: ${({ $color }) => cv($color)};
`;

export default function Uikit() {
  return (
    <div>
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <p className="subtitle">Subtitle</p>
      <p className="subtitle-2">Subtitle 2</p>
      <p className="subtitle-3">Subtitle 3</p>
      <p className="subtitle-4">Subtitle 4</p>

      <p className="p-large">
        This is a large paragraph, perfect for lead text or important content.
      </p>
      <p className="p-medium">
        This is a medium paragraph, standard body text for most content.
      </p>
      <p className="p-large-bold">
        This is a bold large paragraph, useful for emphasis within text.
      </p>
      <p className="p-small">
        This is a small paragraph, ideal for captions or fine print.
      </p>
      <label htmlFor="name">Regular Label</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email" className="label-bold">
        Bold Label
      </label>
      <input type="email" id="email" name="email" />

      <label htmlFor="age" className="label-small">
        Small Label
      </label>
      <input type="number" id="age" name="age" />
      <div style={{ display: "flex" }}>
        {Object.values(COLORS).map((color, index) => (
          <Div $color={color} key={index} />
        ))}
      </div>
      <AppButton bgColor={COLORS.primary} bgColorHover={COLORS.primaryDark}>
        <p className="subtitle-4">Shop Now</p>
      </AppButton>
      <SuccessButton>Shop Now</SuccessButton>
      <AppIconButton padding="0.6rem 1.4rem">
        <SearchIcon sx={{ fontSize: ICON_SIZES.big }} />
      </AppIconButton>

      <div
        style={{
          backgroundColor: cv(COLORS.black),
        }}
      >
        <AppIconButton
          padding="0.8rem"
          borderRadius="3.2rem"
          bgColor={COLORS.white}
          bgColorHover={COLORS.grey2}
          color={COLORS.tertiary}
        >
          <SearchIcon sx={{ fontSize: ICON_SIZES.medium }} />
        </AppIconButton>
        <AppIconButton
          padding="0.8rem"
          borderRadius="3.2rem"
          withBackground={false}
          color={COLORS.tertiary}
        >
          <SearchIcon sx={{ fontSize: ICON_SIZES.medium }} />
        </AppIconButton>
      </div>
    </div>
  );
}
