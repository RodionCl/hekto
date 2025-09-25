import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { rem } from "../../../utils/pxToRem";

export const TrendingImageWrapper = styled.div`
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

export const TrendingButtonWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

interface CardWrapperProps {
  $width: string;
  $maxWidth: string;
}

export const TrendingCardWrapper = styled.div<CardWrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  background: ${COLORS.white};
  position: relative;
  border-radius: 8px;
`;

export const TrendingCardInfo = styled.div`
  padding: ${rem(20, 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TrendingProductTitle = styled.p`
  color: ${COLORS.primary};
  margin-bottom: ${rem(20)};
`;

export const TrendingPriceWrapper = styled.div`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
`;

export const TrendingProductWasPrice = styled.p`
  color: ${COLORS.grey3};
  text-decoration: line-through;
`;
