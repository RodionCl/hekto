import styled from "styled-components";
import { rem } from "@/utils/pxToRem";

const AsideFilter = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${rem(48)};
`;

const FilterCategory = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  max-height: 200px;
  overflow-y: scroll;
`;

const OptionItem = styled.ul`
  display: flex;
  align-items: center;
  gap: ${rem(12)};
`;

const LabelFilter = styled.p`
  border-bottom: 1px solid black;
  max-width: min-content;
`;

const Label = styled.label`
  cursor: pointer;
`;

export const S = {
  AsideFilter,
  FilterCategory,
  OptionsList,
  OptionItem,
  LabelFilter,
  Label,
};
