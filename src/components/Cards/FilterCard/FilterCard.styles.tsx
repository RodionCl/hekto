import styled, { css } from "styled-components";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

export const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 4px;
  }
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${rem(8)};
  position: absolute;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
`;

export const Title = styled.p`
  margin-bottom: ${rem(10)};
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
`;

export const WasPrice = styled.p`
  color: ${COLORS.grey3};
  text-decoration: line-through;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${COLORS.grey3};
`;

interface WrapperProps {
  $isGrid: boolean;
  $width: string;
  $maxWidth: string;
}

export const Wrapper = styled.div<WrapperProps>`
  max-width: ${(props) => props.$maxWidth};
  width: ${(props) => props.$width};
  background: ${COLORS.white};
  border-radius: 4px;
  display: flex;

  flex-direction: row;
  height: 232px;
  gap: 0;

  ${ImageWrapper} {
    padding: ${rem(16)};
  }

  ${Info} > a {
    padding: ${rem(36, 20)};
  }

  ${Header} {
    justify-content: space-between;
    flex-direction: row;
  }

  ${PriceWrapper} {
    margin: 0;
  }

  ${IconList} {
    bottom: 1.8rem;
    left: 1.8rem;
  }

  ${({ $isGrid }) =>
    $isGrid &&
    css`
      flex-direction: column;
      height: 448px;
      gap: ${rem(16)};

      ${ImageWrapper} {
        padding: ${rem(8)};
      }

      ${Info} > a {
        padding: ${rem(0, 8, 48, 8)};
      }

      ${Header} {
        justify-content: flex-start;
        flex-direction: column;
      }

      ${PriceWrapper} {
        margin: ${rem(8, 0, 12, 0)};
      }

      ${IconList} {
        bottom: 1rem;
        left: 1rem;
      }
    `}
`;
