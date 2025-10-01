import styled from "styled-components";
import { rem } from "../../../../../utils/pxToRem";

export const AsideFilter = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${rem(48)};
`;

export const FilterCategory = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  max-height: 200px;
  overflow-y: scroll;
`;

export const OptionItem = styled.ul`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
`;
