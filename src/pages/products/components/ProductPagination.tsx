import { Pagination, Stack } from "@mui/material";
import { COLORS } from "../../../constants/colors";
import { rem } from "../../../utils/pxToRem";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  totalPage,
  onPageChange,
}: PaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} alignItems="flex-end" marginTop={2}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
        sx={{
          fontSize: rem(16),
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: COLORS.primaryLight,
            color: "white",
          },
          "& .MuiPaginationItem-root": {
            fontSize: rem(16),
          },
        }}
      />
    </Stack>
  );
}
