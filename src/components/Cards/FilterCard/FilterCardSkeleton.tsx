import styled, { keyframes } from "styled-components";
import * as S from "./FilterCard.styles";

const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonBase = styled.div`
  animation: ${shimmerAnimation} 1.2s linear infinite forwards;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  border-radius: 4px;
`;

const SkeletonImage = styled(SkeletonBase)`
  height: 100%;
  width: 100%;
`;

const SkeletonLine = styled(SkeletonBase)<{
  width?: string;
  height?: string;
  mb?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "16px"};
  margin-bottom: ${({ mb }) => mb || "0"};
`;

const SkeletonIcon = styled(SkeletonBase)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

interface FilterCardSkeletonProps {
  width?: string;
  maxWidth?: string;
  isGrid?: boolean;
}

export default function FilterCardSkeleton({
  width = "100%",
  maxWidth = "350px",
  isGrid = false,
}: FilterCardSkeletonProps) {
  return (
    <S.Wrapper
      $width={width}
      $maxWidth={maxWidth}
      $isGrid={isGrid}
      className="card-shadow"
      aria-live="polite"
      aria-busy="true"
    ></S.Wrapper>
  );
}
