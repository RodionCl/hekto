import FilterCard from "../components/Cards/FilterCard/FilterCard";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../interfaces/Product";
import { fetchProducts } from "../utils/fetch";

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

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {products.map((product) => (
        <FilterCard
          product={product}
          productUrl={`/products/${product.id}`}
          maxWidth="100%"
          onAddToCart={() => handleAddToCart(product.id)}
          onAddToWishlist={() => handleAddToWishlist(product.id)}
          onZoom={() => handleZoom(product.id)}
        />
      ))}
    </main>
  );
}
