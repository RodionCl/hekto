import styled from "styled-components";
import { rem } from "@/utils/pxToRem";
import { COLORS } from "@/constants/colors";

export const ImageWrapper = styled.div`
  position: relative;
  height: 232px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
  position: absolute;
  bottom: 8px;
  left: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

interface CardWrapperProps {
  $width: string;
  $maxWidth: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  position: relative;

  &:hover ${IconList}, &:focus-within ${IconList}, {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const CardInfo = styled.div`
  padding: ${rem(20, 0)};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductTitle = styled.p`
  margin-right: auto;
`;

export const ProductPrice = styled.p`
  margin-right: 16px;
`;

export const ProductWasPrice = styled.p`
  color: ${COLORS.primary};
`;
