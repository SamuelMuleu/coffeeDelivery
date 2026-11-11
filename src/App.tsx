import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/themes/GlobalStyles";
import theme from "./styles/themes/theme";
import { CartProvider } from "./contexts/CartContext";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Sucess";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
