import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { rem } from "../../../utils/pxToRem";
import { cv } from "../../../utils/cssVar";

export const FeaturedImageWrapper = styled.div`
  position: relative;
  height: 232px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const FeaturedIconList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${rem(8)};
  position: absolute;
  top: 8px;
  left: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

export const FeaturedButtonWrapper = styled.div`
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

export const FeaturedCardWrapper = styled.div<CardWrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  background: ${cv(COLORS.white)};
  position: relative;

  &:hover
    ${FeaturedIconList},
    &:focus-within
    ${FeaturedIconList},
    &:hover
    ${FeaturedButtonWrapper},
    &:focus-within
    ${FeaturedButtonWrapper} {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const FeaturedCardInfo = styled.div`
  padding: ${rem(20, 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FeaturedProductTitle = styled.p`
  color: ${cv(COLORS.primary)};
  margin-bottom: ${rem(20)};
`;

export const FeaturedProductPrice = styled.p`
  margin-top: ${rem(8)};
`;

export const FeaturedProductCode = styled.p`
  color: ${cv(COLORS.grey3)};
`;
