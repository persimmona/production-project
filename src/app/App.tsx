import { Suspense } from "react";
import { useTheme } from "shared/contexts/theme";
import { classNames } from "shared/utils/classNames";
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="Loading...">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <AppRouter />
      </div>
    </Suspense>
  );
};
