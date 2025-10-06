import { SelectChangeEvent } from "@mui/material";
import * as S from "./Layout.styles";
import { perPageOptions, sortByOptions } from "@/constants/productFilters";
import ViewToggle from "./ViewToggle";
import { ViewMode } from "@/utils/parseViewFilters";
import { SelectList } from "@/components/SelectList/SelectList";

interface ProductFiltersProps {
  perPage: string;
  sort: string;
  onPerPageChange: (event: SelectChangeEvent<string>) => void;
  onSortByChange: (event: SelectChangeEvent<string>) => void;
  viewMode: ViewMode;
  onViewToggle: (newView: ViewMode) => void;
}

export default function ProductHeaderFilters({
  perPage,
  sort,
  onPerPageChange,
  onSortByChange,
  viewMode,
  onViewToggle,
}: ProductFiltersProps) {
  return (
    <S.PageFilter>
      <S.SelectListWrapper>
        <S.SelectListLabel>Per Page</S.SelectListLabel>
        <SelectList
          width="100px"
          label="Per Page Selector"
          id="per-page"
          value={perPage}
          onChange={onPerPageChange}
          options={perPageOptions}
        />
      </S.SelectListWrapper>

      <S.SelectListWrapper>
        <S.SelectListLabel>Sort By</S.SelectListLabel>
        <SelectList
          width="200px"
          label="Sort By Selector"
          id="sort-by"
          value={sort}
          onChange={onSortByChange}
          options={sortByOptions}
        />
      </S.SelectListWrapper>
      <ViewToggle viewMode={viewMode} onViewToggle={onViewToggle} />
    </S.PageFilter>
  );
}
