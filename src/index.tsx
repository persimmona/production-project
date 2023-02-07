import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeContextProvider } from "./theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
