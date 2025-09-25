import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { rem } from "../../../utils/pxToRem";

export const ImageWrapper = styled.div`
  position: relative;
  height: 232px;
  padding: ${rem(16, 16, 0, 16)};

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 4px;
  }
`;

interface CardWrapperProps {
  $width: string;
  $maxWidth: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  background: ${COLORS.white};
  position: relative;
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  padding: ${rem(20, 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductTitle = styled.p`
  color: ${COLORS.primary};
  margin-bottom: ${rem(20)};
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
`;

export const ProductWasPrice = styled.p`
  color: ${COLORS.grey3};
  text-decoration: line-through;
`;
