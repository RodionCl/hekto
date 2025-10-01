import IconButton from "@mui/material/IconButton";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import WindowIcon from "@mui/icons-material/Window";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AppIconButton from "../../../components/AppIconButton";
import { COLORS } from "../../../constants/colors";
import { rem } from "../../../utils/pxToRem";
import { ICON_SIZES } from "../../../constants/iconSizes";
import { ViewMode } from "../../../utils/parseViewFilters";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewToggle: (newView: ViewMode) => void;
}

const iconButtonProps = {
  padding: rem(8),
  borderRadius: rem(32),
  bgColor: COLORS.white,
  bgColorHover: COLORS.grey2,
  textColor: COLORS.tertiary,
};

const optionButtonStyles = { fontSize: ICON_SIZES.big, color: COLORS.primary };

export default function ViewToggle({
  viewMode,
  onViewToggle,
}: ViewToggleProps) {
  const handleToggle = (newView: ViewMode) => {
    onViewToggle(newView);
  };

  return (
    <div>
      <AppIconButton
        {...iconButtonProps}
        aria-label="switch to grid view"
        onClick={() => handleToggle("grid")}
      >
        {viewMode === "grid" ? (
          <WindowIcon sx={optionButtonStyles} color="primary" />
        ) : (
          <WindowOutlinedIcon sx={optionButtonStyles} color="action" />
        )}
      </AppIconButton>

      <AppIconButton
        {...iconButtonProps}
        aria-label="switch to list view"
        onClick={() => handleToggle("list")}
      >
        {viewMode === "list" ? (
          <TableRowsIcon sx={optionButtonStyles} color="primary" />
        ) : (
          <TableRowsOutlinedIcon sx={optionButtonStyles} color="action" />
        )}
      </AppIconButton>
      <IconButton onClick={() => handleToggle("list")}></IconButton>
    </div>
  );
}
