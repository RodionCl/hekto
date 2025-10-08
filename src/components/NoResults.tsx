import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { COLORS } from "@/constants/colors";
import { rem } from "@/utils/pxToRem";

interface NoResultsProps {
  message: string;
  suggestion?: string;
}

export default function NoResults({ message, suggestion }: NoResultsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: rem(32),
        marginTop: rem(32),
        borderRadius: rem(16),
        border: "1px dashed",
        borderColor: COLORS.grey2,
        color: COLORS.grey3,
        backgroundColor: COLORS.grey1,
        width: "100%",
        height: "min-content",
      }}
    >
      <SearchOffIcon sx={{ fontSize: 48, marginBottom: 2 }} />
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: "bold", color: COLORS.black }}
      >
        {message}
      </Typography>
      {suggestion && (
        <Typography variant="body2" sx={{ marginTop: 1, color: COLORS.black }}>
          {suggestion}
        </Typography>
      )}
    </Box>
  );
}
