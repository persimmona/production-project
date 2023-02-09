import { Suspense } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ThemeContextProvider, useTheme } from "shared/contexts/theme";
import { classNames } from "shared/utils";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback="Loading...">
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>

        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>

        <AppRouter />
      </div>
    </Suspense>
  );
};
