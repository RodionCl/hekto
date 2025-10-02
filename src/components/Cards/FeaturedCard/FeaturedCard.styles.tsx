import styled from "styled-components";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

export const ImageWrapper = styled.div`
  position: relative;
  height: ${rem(232)};

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${rem(8)};
  position: absolute;
  inset-block-start: 8px;
  inset-inline-start: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  inset-block-end: 8px;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  display: flex;
  inline-size: 100%;
  justify-content: center;
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
  background: ${COLORS.white};
  position: relative;

  &:hover
    ${IconList},
    &:focus-within
    ${IconList},
    &:hover
    ${ButtonWrapper},
    &:focus-within
    ${ButtonWrapper} {
    opacity: 1;
    pointer-events: auto;
  }
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

export const ProductPrice = styled.p`
  margin-top: ${rem(8)};
`;

export const ProductCode = styled.p`
  color: ${COLORS.grey3};
`;
