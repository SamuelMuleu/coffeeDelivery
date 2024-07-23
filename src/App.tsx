import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/themes/GlobalStyles";
import theme from "./styles/themes/theme";

import { Header } from "./components/Header";
import { OrderProvider } from "./contexts/Context";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />

            <OrderProvider>
          <Header />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
          </Routes>
            </OrderProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
