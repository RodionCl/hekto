import { InputAdornment, IconButton } from "@mui/material";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";

interface ButtonProps {
  onClick: () => void;
  type: "increment" | "decrement";
  disabled?: boolean;
}

export default function ActionButton({ onClick, type, disabled }: ButtonProps) {
  const icon =
    type === "decrement" ? (
      <Remove fontSize="small" />
    ) : (
      <Add fontSize="small" />
    );
  const ariaLabel =
    type === "decrement" ? "decrement value" : "increment value";
  const edge = type === "decrement" ? "start" : "end";
  const position = type === "decrement" ? "start" : "end";

  return (
    <InputAdornment position={position}>
      <IconButton
        aria-label={ariaLabel}
        onClick={onClick}
        size="small"
        edge={edge}
        disabled={disabled}
      >
        {icon}
      </IconButton>
    </InputAdornment>
  );
}
