import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";
import { rem } from "@/utils/pxToRem";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  gap: ${rem(32)};
  padding: ${rem(48, 0)};
`;

const thumbnailHeight = 136;
const gapBetweenThumbnails = 16;
const detalisHeight = 3 * thumbnailHeight + 2 * gapBetweenThumbnails;

const ThumbnailList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: ${rem(gapBetweenThumbnails)};
  height: ${rem(detalisHeight)};
  overflow: scroll;
  padding: ${rem(16)};
  flex-shrink: 0;
`;

const ThumbnailButton = styled.button`
  display: flex;
  height: 100%;
`;

const Thumbnail = styled.li`
  width: ${rem(192)};
  min-height: ${rem(thumbnailHeight)};
  border-radius: 8px;
  overflow: hidden;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SelectedImageWrapper = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  height: ${rem(detalisHeight)};
  max-width: ${rem(528)};
  min-width: ${rem(320)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
  margin: ${rem(24, 0)};
`;

const WasPrice = styled.p`
  color: ${COLORS.primary};
  text-decoration: line-through;
`;

const InfoBlock = styled.div`
  padding: ${rem(24)};
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(24)};
  margin-top: ${rem(64)};
`;

const DetailsWrapper = styled.div`
  background: ${COLORS.grey1};
`;

const DescriptionTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
`;

const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
`;

const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  list-style: none;
  padding-left: 0;
  color: ${COLORS.grey3};

  li::before {
    content: "✓";
    margin-right: 8px;
  }
`;

export const S = {
  Layout,
  Main,
  ThumbnailList,
  Thumbnail,
  ThumbnailButton,
  SelectedImageWrapper,
  PriceWrapper,
  WasPrice,
  InfoBlock,
  Description,
  ProductActions,
  DetailsWrapper,
  DescriptionTab,
  DescriptionBlock,
  DescriptionList,
};
