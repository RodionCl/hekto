import styled from "styled-components";
import { rem } from "../../../utils/pxToRem";
import { COLORS } from "../../../constants/colors";

export const LatestImageWrapper = styled.div`
  position: relative;
  height: 232px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const LatestIconList = styled.ul`
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

export const LatestCardWrapper = styled.div<CardWrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  position: relative;

  &:hover ${LatestIconList}, &:focus-within ${LatestIconList}, {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const LatestCardInfo = styled.div`
  padding: ${rem(20, 0)};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LatestProductTitle = styled.p`
  margin-right: auto;
`;

export const LatestProductPrice = styled.p`
  margin-right: 16px;
`;

export const LatestProductWasPrice = styled.p`
  color: ${COLORS.primary};
`;
