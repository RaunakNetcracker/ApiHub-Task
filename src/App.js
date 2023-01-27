import "./App.scss";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Albums from "./pages/albums/index.jsx";
import Details from "./pages/details/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "roboto",
        textTransform: "none",
        fontSize: 16,
      },
    },
  });
  const queryClient = new QueryClient();
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/albums" element={<Albums />} />
                {/* <Route path="/details" element={<Details />} /> */}
                <Route path="/albums/:id" element={<Details />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </HashRouter>
  );
}

export default App;
