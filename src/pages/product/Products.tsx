import FilterCard from "../../components/Cards/FilterCard/FilterCard";
import { useFetch } from "../../hooks/useFetch";
import { Product } from "../../interfaces/Product";
import { fetchProducts } from "../../utils/fetch";
import * as S from "./components/Layout.styles";
import ReusableSelect from "../../components/SelectList";
import { useState } from "react";

const perPageOptions = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
];

export default function Products() {
  const { fetchedData: products } = useFetch<Product[]>(
    () =>
      fetchProducts({
        brands: ["Apple", "Samsung"],
        ratings: [4],
        categories: ["Mobile Phones", "Audio Equipment"],
        priceRanges: [
          { min: 0, max: 150 },
          { min: 350, max: 800 },
        ],
      }),
    [],
  );

  const handleAddToCart = (id: string) => {
    alert(`Product with ID: ${id} added to cart!`);
  };

  const handleAddToWishlist = (id: string) => {
    alert(`Product with ID: ${id} added to wishlist!`);
  };

  const handleZoom = (id: string) => {
    alert(`Zooming image: ${id}`);
  };

  const [perPage, setPerPage] = useState<number>(10);

  return (
    <S.Layout>
      <h1>Products</h1>
      <S.NavWrapper>
        <S.StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </S.StyledNavLink>
        <S.Dot />
        <S.StyledNavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </S.StyledNavLink>
      </S.NavWrapper>
      <S.PageFilter>
        <ReusableSelect
          width="400px"
          label="Select Fruit"
          id="fruit-select"
          value={perPage}
          onChange={handleFruitChange}
          options={fruitOptions}
        ></ReusableSelect>
      </S.PageFilter>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {products.map((product) => (
          <FilterCard
            key={product.id}
            product={product}
            productUrl={`/products/${product.id}`}
            maxWidth="100%"
            onAddToCart={() => handleAddToCart(product.id)}
            onAddToWishlist={() => handleAddToWishlist(product.id)}
            onZoom={() => handleZoom(product.id)}
          />
        ))}
      </main>
    </S.Layout>
  );
}
