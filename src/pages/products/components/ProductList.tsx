import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/interfaces/Product";
import { buildQueryParams, fetchProducts } from "@/utils/fetch/fetchProducts";
import FilterCard from "@/components/Cards/FilterCard/FilterCard";
import FilterCardSkeleton from "@/components/Cards/FilterCard/FilterCardSkeleton";
import {
  StyledMain,
  GridWrapper,
} from "@/pages/products/components/Layout.styles";
import {
  PaginatedResult,
  ProductFilters as ProductFiltersType,
} from "@/interfaces/FetchProduct";
import ProductPagination from "@/pages/products/components/ProductPagination";
import { PARAMS_PAGE } from "@/constants/queryParams";

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
    [buildQueryParams(filters)],
  );

  const handleAddToCart = useCallback((id: string) => {
    alert(`Product with ID: ${id} added to cart!`);
  }, []);

  const handleAddToWishlist = useCallback((id: string) => {
    alert(`Product with ID: ${id} added to wishlist!`);
  }, []);

  const handleZoom = useCallback((id: string) => {
    alert(`Zooming image: ${id}`);
  }, []);

  const [_, setSearchParams] = useSearchParams();

  function setPage(page: number) {
    setSearchParams(
      (prev) => {
        prev.set(PARAMS_PAGE.page, page.toString());
        return prev;
      },
      { replace: true },
    );
  }

  const currentPage = filters.page;
  const totalPage = Math.ceil(products.total / filters.perPage);

  if (currentPage > totalPage && currentPage !== 1) {
    setPage(1);
  }

  return (
    <GridWrapper>
      <StyledMain $isGrid={isGrid}>
        {isFetching
          ? Array.from({ length: 12 }).map((_, index) => (
              <FilterCardSkeleton key={index} maxWidth="100%" isGrid={isGrid} />
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
      <ProductPagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={setPage}
      ></ProductPagination>
    </GridWrapper>
  );
}
