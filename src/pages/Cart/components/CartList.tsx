import { useCart } from "@/contexts/CartContext";
import { S } from "./Cart.styles";
import { Product } from "@/interfaces/Product";
import { useFetch } from "@/hooks/useFetch";
import { fetchMultipleProducts } from "@/utils/fetch/fetchProducts";
import { formatCurrency } from "@/utils/formatCurrency";
import { InputNumberStepper } from "@/components/InputNumberStepper";

interface CartItemWithProduct extends Product {
  quantity: number;
}

const shippingPrice = 100;

export default function CartList() {
  const { items, updateItemQuantity } = useCart();

  const { fetchedData: products, isFetching } = useFetch<Product[]>(
    () => fetchMultipleProducts(items.map((item) => item.id)),
    [],
    [],
  );

  const combinedItems: CartItemWithProduct[] = (products || [])
    .map((product) => {
      const cartItem = items.find((item) => item.id === product.id);
      return cartItem ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean) as CartItemWithProduct[];

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const clampedQuantity = Math.min(Math.max(newQuantity, 0), 10);
    updateItemQuantity(id, clampedQuantity);
  };

  if (isFetching) {
    return <p>Loading cart...</p>;
  }

  const totalPrice = combinedItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <S.Main>
      <S.List>
        {combinedItems.map((item) => (
          <S.Item key={item.id}>
            <S.ItemLeft>
              <S.ProductImgWrapper>
                <img src={item.thumbnail} alt={`${item.name} image`} />
              </S.ProductImgWrapper>
              <S.ProductInfo>
                <S.TitleLink to={`/products/${item.id}`}>
                  <p className="subtitle">{item.name}</p>
                </S.TitleLink>
                <p>{formatCurrency(item.price)}</p>
              </S.ProductInfo>
            </S.ItemLeft>

            <S.ItemRight>
              <InputNumberStepper
                value={item.quantity}
                min={0}
                max={10}
                onIncrement={() =>
                  handleQuantityChange(item.id, item.quantity + 1)
                }
                onDecrement={() =>
                  handleQuantityChange(item.id, item.quantity - 1)
                }
                onChange={(e) =>
                  handleQuantityChange(
                    item.id,
                    e.target.value === "" ? 0 : Number(e.target.value),
                  )
                }
              />
              <S.TotalPriceProduct>
                {formatCurrency(item.price * item.quantity)}
              </S.TotalPriceProduct>
            </S.ItemRight>
          </S.Item>
        ))}
      </S.List>
      <S.TotalPrice>
        <S.TotalField>
          <p className="p-large-bold">Subtotal:</p>
          <p className="label-bold">{formatCurrency(totalPrice)}</p>
        </S.TotalField>
        <S.TotalField>
          <p className="p-large-bold">Total:</p>
          <p className="label-bold">
            {formatCurrency(totalPrice + shippingPrice)}
          </p>
        </S.TotalField>
        <S.TotalField>
          <p className="p-large-bold">Shipping:</p>
          <p className="label-bold">{formatCurrency(shippingPrice)}</p>
        </S.TotalField>
      </S.TotalPrice>
    </S.Main>
  );
}
