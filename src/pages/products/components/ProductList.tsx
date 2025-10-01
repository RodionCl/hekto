import { useCallback } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Product } from "../../../interfaces/Product";
import { fetchProducts } from "../../../utils/fetch/fetchProducts";
import FilterCard from "../../../components/Cards/FilterCard/FilterCard";
import FilterCardSkeleton from "../../../components/Cards/FilterCard/FilterCardSkeleton";
import { StyledMain, GridWrapper } from "./Layout.styles";
import {
  PaginatedResult,
  ProductFilters as ProductFiltersType,
} from "../../../interfaces/FetchProduct";

interface ProductListProps {
  filters: ProductFiltersType;
  isGrid: boolean;
}

export default function ProductList({ filters, isGrid }: ProductListProps) {
  const { fetchedData: products, isFetching } = useFetch<
    PaginatedResult<Product>
  >(
    () => fetchProducts(filters),
    {
      data: [],
      total: 0,
    },
    [filters],
  );

  const currentPage = filters.page;
  const totalPage = Math.ceil(products.total / filters.perPage);

  const handleAddToCart = useCallback((id: string) => {
    alert(`Product with ID: ${id} added to cart!`);
  }, []);

  const handleAddToWishlist = useCallback((id: string) => {
    alert(`Product with ID: ${id} added to wishlist!`);
  }, []);

  const handleZoom = useCallback((id: string) => {
    alert(`Zooming image: ${id}`);
  }, []);

  return (
    <GridWrapper>
      <StyledMain $isGrid={isGrid}>
        {isFetching
          ? Array.from({ length: 8 }).map((_, index) => (
              <FilterCardSkeleton key={index} isGrid={isGrid} />
            ))
          : products.data.map((product) => (
              <FilterCard
                key={product.id}
                product={product}
                productUrl={`/products/${product.id}`}
                maxWidth="100%"
                onAddToCart={() => handleAddToCart(product.id)}
                onAddToWishlist={() => handleAddToWishlist(product.id)}
                onZoom={() => handleZoom(product.id)}
                isGrid={isGrid}
              />
            ))}
      </StyledMain>
    </GridWrapper>
  );
}
