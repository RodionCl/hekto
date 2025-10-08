import { rem } from "@/utils/pxToRem";
import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function CustomTabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`additional-tabpanel-${index}`}
      aria-labelledby={`additional-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: rem(24) }}>{children}</Box>}
    </div>
  );
}
