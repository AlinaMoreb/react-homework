import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography, Button, Box } from "@mui/material";
import  styled  from "@emotion/styled";


const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  borderRadius: "8px",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {

  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#1976d2" },
                background: { default: "#f5f5f5", paper: "#fff" },
                text: { primary: "#000" },
              }
            : {
                primary: { main: "#90caf9" },
                background: { default: "#121212", paper: "#1e1e1e" },
                text: { primary: "#fff" },
              }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default",
          color: "text.primary",
          transition: "all 0.3s ease",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {mode === "light" ? "Светлая тема 🌞" : "Тёмная тема 🌙"}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Переключить тему
        </StyledButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;

