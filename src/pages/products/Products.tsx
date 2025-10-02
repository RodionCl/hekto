import { SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useMemo, useCallback } from "react";
import { Layout, FilterListWrapper } from "./components/Layout.styles";
import ProductHeaderFilters from "./components/ProductHeaderFilters";
import ProductList from "./components/ProductList";
import Breadcrumbs from "./components/Breadcrumbs";
import { parseProductFilters } from "../../utils/parseProductFilters";
import { parseViewMode, ViewMode } from "../../utils/parseViewFilters";
import { ProductFilters as ProductFiltersType } from "../../interfaces/FetchProduct";
import { SideFilter } from "./components/SideFilter";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const viewMode: ViewMode = useMemo(
    () => parseViewMode(searchParams),
    [searchParams],
  );

  const filters: ProductFiltersType = useMemo(
    () => parseProductFilters(searchParams),
    [searchParams],
  );

  function handleViewToggle(newView: ViewMode) {
    setSearchParams(
      (prev) => {
        prev.set("view", newView);
        return prev;
      },
      { replace: true },
    );
  }

  const handlePerPageChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const newPerPage = event.target.value;
      setSearchParams(
        (prev) => {
          prev.set("perPage", newPerPage);
          prev.set("page", "1");
          return prev;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const handleSortByChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const newSort = event.target.value;
      setSearchParams(
        (prev) => {
          prev.set("sort", newSort);
          return prev;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  return (
    <Layout>
      <h1>Products</h1>
      <Breadcrumbs />
      <ProductHeaderFilters
        perPage={filters.perPage.toString()}
        sort={filters.sort ?? ""}
        onPerPageChange={handlePerPageChange}
        onSortByChange={handleSortByChange}
        viewMode={viewMode}
        onViewToggle={handleViewToggle}
      />

      <FilterListWrapper>
        <SideFilter />
        <ProductList filters={filters} isGrid={viewMode === "grid"} />
      </FilterListWrapper>
    </Layout>
  );
}
