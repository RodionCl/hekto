import { S } from "./Cart.styles";
import emptyCart from "/public/EmptyCart.webp";

export default function EmptyCart() {
  return (
    <S.Main $vertical={true}>
      <S.EmptyImageWrapper>
        <img src={emptyCart} alt="Empty Cart Image" />
      </S.EmptyImageWrapper>
      <S.EmptyTitle>Your cart is empty</S.EmptyTitle>
      <S.Link to="/products">Start shopping</S.Link>
    </S.Main>
  );
}
