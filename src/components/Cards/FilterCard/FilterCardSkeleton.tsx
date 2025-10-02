import styled, { keyframes } from "styled-components";
import { Wrapper } from "./FilterCard.styles";
import { rem } from "@/utils/pxToRem";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const ShimmerDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: ${shimmer} 2.2s linear infinite forwards;
`;

type ShimmerProps = {
  width?: string;
  maxWidth?: string;
  isGrid?: boolean;
};

export default function FilterCardSkeleton({
  width = "100%",
  maxWidth = rem(350),
  isGrid = false,
}: ShimmerProps) {
  return (
    <Wrapper
      $width={width}
      $maxWidth={maxWidth}
      className="card-shadow"
      $isGrid={isGrid}
    >
      <ShimmerDiv />
    </Wrapper>
  );
}
``;
