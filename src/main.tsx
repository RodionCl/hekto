import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Lato", sans-serif',
    fontWeightRegular: 400,
    fontSize: 16,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
