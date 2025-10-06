import { COLORS } from "@/constants/colors";
import { MAX_WIDTH } from "@/constants/styleConstants";
import { rem } from "@/utils/pxToRem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface MainProps {
  $vertical?: boolean;
}

export const Main = styled.main<MainProps>`
  display: flex;
  flex-direction: ${({ $vertical }) => ($vertical ? "column" : "row")};
  align-items: center;
  justify-content: center;
  padding: ${rem(48)};
  gap: ${rem(24)};
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
`;

const EmptyImageWrapper = styled.div`
  width: ${rem(387)};
  height: ${rem(287)};

  img {
    width: 100%;
    height: 100%;
  }
`;

const EmptyTitle = styled.h3`
  text-transform: capitalize;
`;

const EmptyLink = styled(NavLink)`
  text-decoration: none;
  padding: ${rem(16, 40)};
  border-radius: 8px;
  text-transform: capitalize;
  background: ${COLORS.primary};
  color: ${COLORS.white};
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${rem(24)};
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;

const ItemLeft = styled.div`
  display: flex;
`;

const ProductImgWrapper = styled.div`
  width: ${rem(150)};
  height: ${rem(100)};
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductInfo = styled.div`
  padding: ${rem(24)};
`;

const TitleLink = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.black};
`;

const ItemRight = styled.div`
  display: flex;
  gap: ${rem(48)};
`;

const TotalPriceProduct = styled.p`
  min-width: ${rem(60)};
`;

const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.grey1};
  border: 1px solid ${COLORS.grey2};
  border-radius: 8px;
  padding: ${rem(16)};
  width: ${rem(300)};
`;

const TotalField = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.grey2};
  padding: ${rem(16)};

  &:last-child {
    border-bottom: none;
  }
`;

export const S = {
  Main,
  EmptyImageWrapper,
  EmptyTitle,
  EmptyLink,
  List,
  Item,
  ItemLeft,
  ProductImgWrapper,
  ProductInfo,
  TitleLink,
  ItemRight,
  TotalPriceProduct,
  TotalPrice,
  TotalField,
};
